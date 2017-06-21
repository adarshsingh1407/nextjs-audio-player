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
              <a href="/">React Audio Player</a>
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
      </div>
    );
  }
}

export default PreLoginHeader
