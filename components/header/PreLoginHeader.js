import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
  Glyphicon
} from 'react-bootstrap'

class PreLoginHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logoTap(e) {
    console.log(e.target.value);
    Router.push({pathname: '/'})
  }
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Link href='/' as='/'>
              <a className="navbar-brand">
                <Glyphicon glyph="music" style={{"color": "white"}} />
                &nbsp;Next Audio Player
              </a>
            </Link>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav navbar-right">
              <li role="presentation">
                <Link href='/?id=1&role=album' as='/album/1'>
                  <a role="button">Album</a>
                </Link>
              </li>
              <li role="presentation">
                <Link href='/?id=2&role=artist' as='/artist/2'>
                  <a role="button">Artist</a>
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
        <h1>Next Audio Player</h1>
      </div>
    );
  }
}

export default PreLoginHeader
