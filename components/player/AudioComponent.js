import React from 'react'
import dynamic from 'next/dynamic'
const Audio = dynamic(import ('react-audioplayer'), { ssr: false })

class AudioComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <div>
        {
          this.props.playlist.length > 0
          ?
          <div>
            <Audio style={{
              "position": 'absolute',
              "bottom": 0,
              "left": 0,
              "width": "100%"
            }} color={'#3f51b5'} height={400} autoPlay={true} playlist={this.props.playlist}/>
          </div>
          :
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}>Add Some Songs!</div>
        }
      </div>
    );
  }
}

export default AudioComponent
