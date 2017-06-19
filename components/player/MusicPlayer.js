import React from 'react'
import {Grid, Row, Col, Button, Panel } from 'react-bootstrap'

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Panel header={'Playlist'} bsStyle="success">
        <div>
          <Grid>
            <Row className="show-grid">
              <Col md={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
      </Panel>
    );
  }
}

export default MusicPlayer
