import React from 'react'
import { Table, Button, Image, Grid, Row, Col, Glyphicon } from 'react-bootstrap'
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
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th className="text-right">#</th>
            <th className="text-left">Title</th>
            <th className="text-left">Artist</th>
            <th className="text-center">Album Art</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songsList.map((song) => {
            return (
              <tr key={song.id}>
                <td className="text-right">{song.id}</td>
                <td className="text-left">{song.name}</td>
                <td className="text-left"><i>{song.artist}</i></td>
                <td className="text-center"><Image src={song.img} alt={song.alt} rounded style={{"maxHeight":"40px"}} /></td>
                <td className="text-center">
                  <div>
                    <Button bsSize="small"
                      bsStyle={ADD_SONG === this.props.action.id ? 'primary' : 'danger'}
                      onClick={this.props.changePlaylist.bind(this, this.props.action.id, song.id)}>
                      <Glyphicon glyph={this.props.action.glyph} style={{"color": "white"}}  />
                      &nbsp;{this.props.action.text}
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
