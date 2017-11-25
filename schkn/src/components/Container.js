import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PresentationCard from './PresentationCard.js'

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row className="container-row fadeInUp animated">
          <Col className="container-column"><PresentationCard value="> presentation" langage="shell" /></Col>
          <Col className="container-column"><PresentationCard value="> skills" langage="browser" /></Col>
          <Col className="container-column"><PresentationCard value="> hobbies" langage="truc"/></Col>
        </Row>
        <Row className="container-row">
        </Row>
      </Container>
    );
  }
}
