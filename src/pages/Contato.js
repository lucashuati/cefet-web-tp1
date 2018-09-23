import React from 'react';
import { Row, Col } from 'react-materialize';

class Contato extends React.Component {
  render() {
    return (
      <Row>
        <Col s={12}>
          <h1>Contato</h1>
        </Col>
        <Col s={6}>
          <h4>Fale comigo</h4>
        </Col>
        <Col s={6}>
          <h4>Venha me encontrar</h4>
        </Col>
      </Row>
    );
  }
}

export default Contato;
