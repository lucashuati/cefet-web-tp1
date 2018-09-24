import React from 'react';

class FaleComigo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [
        {
          label: 'Nome',
          value: 'Lucas Nascimento Huati Corrêa',
        },
        {
          label: 'Telefone',
          value: '(31) 9 9999 - 9999',
        },
        {
          label: 'Email',
          value: 'lucashuati@gmail.com',
        },
      ],
    };
  }

  renderInfos() {
    const { infos } = this.state;
    return infos.map(info => (
      <p>
        <span>{info.label}:</span> {info.value}
      </p>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <h4>Fale comigo</h4>
        {this.renderInfos()}
      </React.Fragment>
    );
  }
}

export default FaleComigo;
