import React from 'react'
import {
  Grid,
  Row,
  Col,
  Button,
  Panel,
  Glyphicon
} from 'react-bootstrap'

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Panel header={'Songs'} bsStyle="primary">
        {this.props.children[0]}
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              {this.props.children[1]}
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default Directory
