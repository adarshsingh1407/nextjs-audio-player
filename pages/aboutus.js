import React from 'react'
import PreLoginLayout from '../components/PreLoginLayout'

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <PreLoginLayout playlist={[]}>
          <div>About Us</div>
        </PreLoginLayout>
      </div>
    );
  }
}

export default AboutUs
