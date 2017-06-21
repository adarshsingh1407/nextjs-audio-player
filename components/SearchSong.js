import React from 'react'
import {
  FormGroup,
  InputGroup,
  FormControl,
  Grid,
  Row,
  Col,
  Glyphicon,
  ControlLabel
} from 'react-bootstrap'

class SearchSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <FormGroup controlId="searchSongForm">
              <ControlLabel htmlFor="searchSong">Search</ControlLabel>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="music"/></InputGroup.Addon>
                <FormControl id="searchSong" type="text" placeholder="Search your favorite song..."
                onChange={this.props.filterDirectory.bind(this)}/>
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SearchSong
