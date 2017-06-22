import React from 'react'
import Head from 'next/head'
import PreLoginHeader from '../components/header/PreLoginHeader'
import AudioComponent from '../components/player/AudioComponent'

class PreLoginLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{
        "padding": "65px 15px 50px 15px"
      }}>
        <Head>
          <title>Next Audio Player</title>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
          {/* <link rel="stylesheet" defer href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/> */}
        </Head>
        <PreLoginHeader playlist={this.props.playlist}/> {this.props.children}
        <AudioComponent playlist={this.props.playlist}/>
      </div>
    );
  }
}

export default PreLoginLayout
