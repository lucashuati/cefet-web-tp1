import React from 'react';

class FaleComigo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [
        {
          label: 'Nome',
          value: 'Lucas Nascimento Huati Corrêa',
          key: 'nome',
        },
        {
          label: 'Telefone',
          value: '(31) 9 9999 - 9999',
          key: 'tel',
        },
        {
          label: 'Email',
          value: 'lucashuati@gmail.com',
          key: 'mail',
        },
      ],
      socialMedias: [
        {
          link: 'http://github.com',
          logo: <i className="fab fa-github" />,
          key: 'github',
        },
        {
          link: 'http://linkedin.com',
          logo: <i className="fab fa-linkedin-in" />,
          key: 'linkedin',
        },
        {
          link: 'http://twitter.com',
          logo: <i className="fab fa-twitter" />,
          key: 'twitter',
        },
      ],
    };
  }

  renderInfos() {
    const { infos } = this.state;
    return infos.map(info => (
      <p key={info.key}>
        <span>{info.label}:</span> {info.value}
      </p>
    ));
  }

  renderSocialMedias() {
    const { socialMedias } = this.state;
    return socialMedias.map(socialMedia => (
      <div key={socialMedia.key} className="col m3">
        <a href={socialMedia.link}>{socialMedia.logo}</a>
      </div>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <h4>Fale comigo</h4>
        {this.renderInfos()}
        <h5>Redes Sociais</h5>
        {this.renderSocialMedias()}
      </React.Fragment>
    );
  }
}

export default FaleComigo;
