import React from 'react';
import { Row, Col } from 'react-materialize';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { FaleComigo } from '../components';

const MyMapComponent = withScriptjs(withGoogleMap(() => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)));

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
              src="https://www.google.com/maps/embed/v1/undefined?origin=Chicago,IL&q=http://localhost:5000&destination=Los+Angeles,CA&key="
              allowFullScreen
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contato;
