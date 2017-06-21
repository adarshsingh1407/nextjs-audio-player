import React from 'react'

class ArtistProfile extends React.Component {
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
        Artist Profile : {this.props.id}
      </div>
    );
  }
}

export default ArtistProfile
