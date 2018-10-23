import React from 'react';
import axios from 'axios';
import { Treemap } from 'd3plus-react';
import pythonLogo from '../assets/images/python-logo.png';
import jsLogo from '../assets/images/js-logo.png';
import cSharpLogo from '../assets/images/c#-logo.png';
import djangoLogo from '../assets/images/django-logo.png';
import reactLogo from '../assets/images/react-logo.png';
import dotnetcoreLogo from '../assets/images/dotnetcore.png';
import sqlserverLogo from '../assets/images/sql-server-logo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';
import postgreeLogo from '../assets/images/postgree-logo.png';
import curriculo from '../assets/misc/curriculo.pdf';

class Curriculum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      loading: false,
      curriculum: [
        {
          label: 'Linguagens de Programação',
          skills: [
            {
              name: 'Python',
              url: pythonLogo,
            },
            {
              name: 'Java Script',
              url: jsLogo,
            },
            {
              name: 'C#',
              url: cSharpLogo,
            },
          ],
        },
        {
          label: 'Frameworks',
          skills: [
            {
              name: 'Django',
              url: djangoLogo,
            },
            {
              name: 'React JS',
              url: reactLogo,
            },
            {
              name: '.NET Core',
              url: dotnetcoreLogo,
            },
          ],
        },
        {
          label: 'Databases',
          skills: [
            {
              name: 'SQL Server',
              url: sqlserverLogo,
            },
            {
              name: 'MySQL',
              url: mysqlLogo,
            },
            {
              name: 'Postgree',
              url: postgreeLogo,
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/lucashuati/repos';
    this.setState({ loading: true });
    axios.get(apiUrl)
      .then((response) => {
        const languages = response.data.map(repo => ({ id: repo.language, value: 1 })).filter(data => data.id);
        this.setState({ languages, loading: false });
      });
  }

  renderCurriculum() {
    const { curriculum } = this.state;
    return curriculum.map(section => (
      <React.Fragment>
        <h3>{section.label}</h3>
        <div className="row">
          {section.skills.map(skill => (
            <div className="col m4 s12">
              <img className="img-responsive" src={skill.url} alt={skill.name} />
            </div>
          ))}
        </div>
      </React.Fragment>
    ));
  }

  renderGraph() {
    const { languages } = this.state;
    const methods = {
      groupBy: 'id',
      data: languages,
      size: d => d.value,
    };

    return <Treemap config={methods} />;
  }

  renderStatics() {
    const { loading } = this.state;
    if (loading) {
      return <p>Carregando...</p>;
    }
    return this.renderGraph();
  }

  render() {
    return (
      <div className="container">
        <h2>Curriculum</h2>
        {this.renderCurriculum()}
        <a className="waves-effect waves-light btn right" href={curriculo} download>Dowload</a>
        <h3>Estatísticas</h3>
        {this.renderStatics()}
      </div>
    );
  }
}

export default Curriculum;
