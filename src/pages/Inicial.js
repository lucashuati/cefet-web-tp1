import React from 'react';
import {
  Card,
  Col,
  Row,
} from 'react-materialize';

class Inicial extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <h3>Quem Sou ?</h3>
          <p>Graduando de Engenharia de Computação, ex competidor de maratonas de programação, com muita afinidade
            por desenvolvimento de software.
          </p>
          <p>
            Atualmente, focado em desenvolvimento full stack e estudioso do conceito DevOps.
          </p>
          <p>
            Já trabalhou com diversos projetos em diversas linguagens e frameworks, focado em desenvolvimento Python
            com o framework Django e em desenvolvimento JavaScript com React JS.
          </p>
          <p>
            Estudio no mundo cloud, com especialidade em Amazon Web Service (AWS).
          </p>

          <Col m={4} s={12}>
            <Card
              className="blue-grey darken-1 small"
              textClassName="white-text"
              title="Veja meus projetos"
            >
              Projetos diversos, utilizando as ferramentas mais modernas do mercado.
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="blue-grey darken-1 small"
              textClassName="white-text"
              title="Avalie meu curriculo"
            >
              Curriculo atualizado, visando sempre as melhores ferramentas e tecnologias.
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              className="blue-grey darken-1 small"
              textClassName="white-text"
              title="Fale Comigo"
            >
              Gostou do que viu ? Entre em contato comigo.
            </Card>
          </Col>
          <Col m={12}>
            <blockquote>
              Truth can only be found in one place: the code.
              <div className="author">
                Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship
              </div>
            </blockquote>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Inicial;
