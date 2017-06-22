import React from 'react'
import AudioComponent from '../components/player/AudioComponent'
import {playlist, getSongById, ADD_SONG, REMOVE_SONG} from '../components/player/songs'
import MusicPlayer from '../components/player/MusicPlayer'
import Directory from '../components/Directory'
import SearchSong from '../components/SearchSong'
import SongTable from '../components/SongTable'
import {songs} from '../components/player/songs'
import PreLoginLayout from '../components/PreLoginLayout'
import {Button} from 'react-bootstrap'
import Link from 'next/link'
import ArtistProfile from '../components/ArtistProfile'
import AlbumProfile from '../components/AlbumProfile'
import fetch from 'isomorphic-unfetch'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      songs: songs
    };
  }
  static async getInitialProps(context) {
    const { id } = context.query
    const getInitialPropsId = id;
    var searchShow = 'batman';
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${searchShow}`)
    const show = await res.json()
    console.log("Shows : " + show.length);
    return { getInitialPropsId, show }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
  getProfile(role, id) {
    switch (role) {
      case 'artist':
        return (<ArtistProfile id={id} />)
      case 'album':
        return (<AlbumProfile id={id}/>)
      default:
        return (<div>No Profile Selected</div>)
    }
  }
  render() {
    console.log("Shows : " + this.props.show.length);
    return (
      <div>
        <PreLoginLayout playlist={this.state.playlist}>
          getInitialPropsId : {this.props.getInitialPropsId}
          {this.getProfile(this.props.url.query.role, this.props.url.query.id)}
          <ul>
            <li>
              <Link href='/?id=1&role=album' as='/album/1'>
                <a>Album 1</a>
              </Link>
            </li>
            <li>
              <Link href='/?id=2&role=artist' as='/artist/2'>
                <a>Artist 2</a>
              </Link>
            </li>
          </ul>
          <Directory>
            <SearchSong filterDirectory={this.filterDirectory.bind(this)}/>
            <SongTable songs={this.state.songs} sortById={true} changePlaylist={this.changePlaylist.bind(this)} actionId={ADD_SONG} actionText={'Add'}/>
          </Directory>
          <Button bsStyle="link" onClick={() => {
            this.props.url.push({
              pathname: '/aboutus',
              query: {
                'id': '1'
              }
            })}}>
            About Us
          </Button>
          <MusicPlayer>
            <SongTable songs={this.state.playlist} sortById={false} changePlaylist={this.changePlaylist.bind(this)} actionId={REMOVE_SONG} actionText={'Remove'}/>
          </MusicPlayer>
        </PreLoginLayout>

      </div>
    );
  }
}

export default App
