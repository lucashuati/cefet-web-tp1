import React from 'react';
import { Row, Col } from 'react-materialize';
import { FaleComigo } from '../components';

class Contato extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={12}>
            <h1>Contato</h1>
          </Col>
          <Col s={6}>
            <FaleComigo />
          </Col>
          <Col s={6}>
            <h4>Venha me encontrar</h4>
            <iframe
              title="MAPS"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.358061941631!2d-43.93899358508576!3d-19.909310586615337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a0256d2542d%3A0xcce27ff957fdf660!2sR.+Arax%C3%A1%2C+506+-+Lagoinha%2C+Belo+Horizonte+-+MG%2C+31110-140!5e0!3m2!1spt-BR!2sbr!4v1540428656217"
              allowFullScreen
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contato;
