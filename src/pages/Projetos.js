import React from 'react';
import {
  Card,
  CardTitle,
} from 'react-materialize';
import Sample from '../assets/images/sample-1.jpg';
import educatLogo from '../assets/images/educat-logo.png';
import base2Logo from '../assets/images/base2-logo.png';
import encimatLogo from '../assets/images/encimat-logo.jpeg';
import gccLogo from '../assets/images/gcc-logo.jpeg';
import jwLogo from '../assets/images/jw-logo.jpeg';

class Projetos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Faculdade',
          img: gccLogo,
          description: 'Maratona de Progamação - GCC',
        },
        {
          title: 'Faculdade',
          img: encimatLogo,
          description: 'Projeto de Extensão - ENCIMAT',
        },
        {
          title: 'Profissional',
          img: jwLogo,
          description: 'WebDesigner - JW Perícia',
        },
        {
          title: 'Profissional',
          img: base2Logo,
          description: 'Estágio de Teste - BASE 2',
        },
        {
          title: 'Profissional',
          img: educatLogo,
          description: 'Estagio Full-Stack - EDUCAT',
        },
      ],
    };
  }

  renderProjects() {
    const { projects } = this.state;
    return projects.map(project => (
      <Card
        className="small col m4"
        header={<CardTitle image={project.img}></CardTitle>}
      >
        { project.description }
      </Card>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2>Projetos</h2>
          <div className="row">
            {this.renderProjects()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projetos;
