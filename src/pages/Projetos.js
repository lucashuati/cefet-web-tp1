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
          title: 'Maratona de Progamação - GCC',
          img: null,
          description: 'gdhasjda',
          imgs: [
            Sample,
            Sample,
            Sample,
          ],
        },
        {
          title: 'Projeto de Extensão - ENCIMAT',
          img: null,
          description: 'gdhasjda',
          imgs: [
            Sample,
            Sample,
            Sample,
          ],
        },
        {
          title: 'WebDesigner - JW Perícia',
          img: null,
          description: 'gdhasjda',
          imgs: [
            Sample,
            Sample,
            Sample,
          ],
        },
        {
          title: 'Estágio de Teste - BASE 2',
          img: null,
          description: 'gdhasjda',
          imgs: [
            Sample,
            Sample,
            Sample,
          ],
        },
        {
          title: 'Estagio Full-Stack - EDUCAT',
          img: null,
          description: 'gdhasjda',
          imgs: [
            Sample,
            Sample,
            Sample,
          ],
        },
      ],
    };
  }

  renderProjects() {
    const { projects } = this.state;
    return projects.map(project => (
      <Card
        className="small"
        header={<CardTitle image={Sample}>{ project.title }</CardTitle>}
        actions={[
          <Modal
            header={project.title}
            trigger={<Button waves="light" type="button">Veja mais</Button>}
          >
            {project.imgs.map(img => (
              <div className="col s3 m3 l3 xl3">
                <img className="responsive-img" src={img} alt="Project" />
              </div>
            ))}
          </Modal>,
        ]}
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
          {this.renderProjects()}
        </div>
      </React.Fragment>
    );
  }
}

export default Projetos;
