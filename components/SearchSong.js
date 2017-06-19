import React from 'react'
import {
  FormGroup,
  InputGroup,
  FormControl,
  Grid,
  Row,
  Col,
  Glyphicon
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
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="music"/></InputGroup.Addon>
                <FormControl type="text" placeholder="Search your favorite song..."
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
