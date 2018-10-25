import React from 'react';
import {
  Card,
  CardTitle,
  Button,
  Modal,
} from 'react-materialize';
import Sample from '../assets/images/sample-1.jpg';

class Projetos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Faculdade',
          img: null,
          description: 'Maratona de Progamação - GCC',
        },
        {
          title: 'Faculdade',
          img: null,
          description: 'Projeto de Extensão - ENCIMAT',
        },
        {
          title: 'Profissional',
          img: null,
          description: 'WebDesigner - JW Perícia',
        },
        {
          title: 'Profissional',
          img: null,
          description: 'Estágio de Teste - BASE 2',
        },
        {
          title: 'Profissional',
          img: null,
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
        header={<CardTitle image={Sample}>{ project.title }</CardTitle>}
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
