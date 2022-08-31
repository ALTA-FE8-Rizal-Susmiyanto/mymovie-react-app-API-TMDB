import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Intro extends Component {
  render() {
    return (
      <div class="intro">
        <Container className="text-black d-flex justify-content-center align-items-center border">
          <Row>
            <Col>
              <div className="title">NONTON|GRATIS</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Intro;
