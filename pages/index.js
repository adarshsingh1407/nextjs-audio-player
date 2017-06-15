import React from 'react'
import Head from 'next/head'
import AudioComponent from '../components/player/AudioComponent'
import { playlist, getSongById, ADD_SONG, REMOVE_SONG } from '../components/player/playlist'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      songs: playlist
    };
  }
  changePlaylist(songId, actionId) {
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
              playlist: [...prevState.playlist, getSongById(songId, this.state.songs)],
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
              songs: [...prevState.songs, getSongById(songId, this.state.playlist)]
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
          <title>This page has a title 🤔</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <h1>React Audio Player</h1>
        Songs:
        <ul>
          {this.state.songs.map((song) => {
            return <li key={song.id}>{song.name} <button onClick={this.changePlaylist.bind(this, song.id, ADD_SONG)}>Add</button></li>
          })}
        </ul>
        <br />
        Playlist:
        <ul>
          {this.state.playlist.map((song) => {
            return <li key={song.id}>{song.name} <button onClick={this.changePlaylist.bind(this, song.id, REMOVE_SONG)}>Remove</button></li>
          })}
        </ul>
        Playlist Size: {this.state.playlist.length}
        <br />
        <AudioComponent playlist={this.state.playlist}/>
      </div>
    );
  }
}

export default App
