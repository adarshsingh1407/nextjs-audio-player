import React from 'react'
import { Table, Button, Image } from 'react-bootstrap'
import { ADD_SONG, REMOVE_SONG } from '../components/player/songs'

class SongTable extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    var songsList = this.props.songs;
    if (this.props.sortById) {
      songsList.sort((a, b) => (a.id - b.id));
    }
    return(
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Name</th>
            <th className="text-center">Artist</th>
            <th className="text-center">Album Art</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songsList.map((song) => {
            return (
              <tr key={song.id}>
                <td className="text-center">{song.id}</td>
                <td className="text-center">{song.name}</td>
                <td className="text-center"><i>{song.artist}</i></td>
                <td className="text-center"><Image src={song.img} thumbnail style={{"maxHeight":"40px"}} /></td>
                <td className="text-center">
                  <div>
                    <Button bsSize="small"
                      bsStyle={ADD_SONG === this.props.actionId ? 'primary' : 'danger'}
                      onClick={this.props.changePlaylist.bind(this, this.props.actionId, song.id)}>
                      {this.props.actionText}
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export default SongTable
