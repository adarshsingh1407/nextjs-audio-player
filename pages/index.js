import React from 'react'
import Head from 'next/head'
import AudioComponent from '../components/player/AudioComponent'
import { playlist, getSongById, ADD_SONG, REMOVE_SONG } from '../components/player/songs'
import PreLoginHeader from '../components/header/PreLoginHeader'
import MusicPlayer from '../components/player/MusicPlayer'
import Directory from '../components/Directory'
import SearchSong from '../components/SearchSong'
import SongTable from '../components/SongTable'
import { songs } from '../components/player/songs'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      songs: songs
    };
  }
  filterDirectory(event) {
    var searchSongByName = event.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        songs: songs.filter((song) => (song.name.toLowerCase().indexOf(searchSongByName.toLowerCase()) >= 0))
      }
    })
  }
  changePlaylist(actionId, songId) {
    switch (actionId) {
      case ADD_SONG:
        if (getSongById(songId, this.state.playlist)) {
          //Song exists in playlist, can't add
          console.log(`Song already exists in playlist`);
        } else {
          //Song doesn't exist, ADD_SONG
          this.setState((prevState) => {
            var newSongsList = this.state.songs.filter((song) => song.id !== songId);
            return {
              playlist: [
                ...prevState.playlist,
                getSongById(songId, this.state.songs)
              ],
              songs: newSongsList
            };
          });
        }
        break;
      case REMOVE_SONG:
        if (getSongById(songId, this.state.playlist)) {
          //Song exists in playlist, REMOVE_SONG
          this.setState((prevState) => {
            var newPlaylist = this.state.playlist.filter((song) => song.id !== songId);
            return {
              playlist: newPlaylist,
              songs: [
                ...prevState.songs,
                getSongById(songId, this.state.playlist)
              ]
            };
          });
        } else {
          //Song doesn't exist, can't remove
          console.log(`Song doesn't exist in playlist`);
        }
        break;
      default:
        console.log('INVALID_ACTION: ' + actionId);
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>React Audio Player</title>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        </Head>
        <PreLoginHeader/>
        <div style={{
          "padding": "65px 15px 50px 15px"
        }}>
        <Directory>
          <SearchSong filterDirectory={this.filterDirectory.bind(this)}/>
          <SongTable songs={this.state.songs} sortById={true} changePlaylist={this.changePlaylist.bind(this)} actionId={ADD_SONG} actionText={'Add'}/>
        </Directory>
          <MusicPlayer>
            <SongTable songs={this.state.playlist} sortById={false} changePlaylist={this.changePlaylist.bind(this)} actionId={REMOVE_SONG} actionText={'Remove'}/>
          </MusicPlayer>
        </div>
        <AudioComponent playlist={this.state.playlist}/>
      </div>
    );
  }
}

export default App
