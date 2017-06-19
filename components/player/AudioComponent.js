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
              "position": 'fixed',
              "bottom": 0,
              "width": "100%",
              "background": "#fff"
            }} color={'#333333'} height={400} autoPlay={true} playlist={this.props.playlist}/>
          </div>
          :
          <div></div>
        }
      </div>
    );
  }
}

export default AudioComponent
