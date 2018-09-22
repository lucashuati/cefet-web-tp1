import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        'Getting started',
        'Components',
      ],
      activeIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderItens = this.renderItens.bind(this);
  }

  handleClick(index) {
    this.setState({ activeIndex: index });
  }

  renderItens() {
    const { pages, activeIndex } = this.state;
    return pages.map((page, index) => (
      <NavItem key={page} className={`${activeIndex === index ? 'active' : ''}`} onClick={() => this.handleClick(index)}>{page}</NavItem>
    ));
  }

  render() {
    return (
      <Navbar brand="Lucas Corrêa" right fixed>
        {this.renderItens()}
      </Navbar>
    );
  }
}

export default NavBar;
