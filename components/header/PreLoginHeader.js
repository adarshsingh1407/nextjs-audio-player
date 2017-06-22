import React from 'react'
import Router from 'next/router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap'

class PreLoginHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Next Audio Player</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text>
              <Button bsStyle="link"
                onClick={() => {
                  Router.push({
                    pathname: '/aboutus',
                    query: {'id': '1'}
                    // query: this.props.playlist
                  })
                }}>About Us</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <h1>Next Audio Player</h1>
      </div>
    );
  }
}

export default PreLoginHeader
