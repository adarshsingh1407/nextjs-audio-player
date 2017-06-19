import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

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
              <a href="#">React Audio Player</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default PreLoginHeader
