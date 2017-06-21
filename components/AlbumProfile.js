import React from 'react'

class AlbumProfile extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  static async getInitialProps(context) {
    const { id } = context.query
    const getInitialPropsId = id;
    return { getInitialPropsId }
  }
  render(){
    return(
      <div>
        Album Profile : {this.props.id}
      </div>
    );
  }
}

export default AlbumProfile
