import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Logo from '../assets/images/logo.png';
import { PageContext } from '../Context';
import {
  Contato,
  Projetos,
  Curriculum,
  Inicial,
} from '../pages';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          label: 'Inicial',
          component: <Inicial />,
        },
        {
          label: 'Projetos',
          component: <Projetos />,
        },
        {
          label: 'Curriculum Vitae',
          component: <Curriculum />,
        },
        {
          label: 'Contato',
          component: <Contato />,
        },
      ],
      activeIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderItens = this.renderItens.bind(this);
  }

  handleClick(index, page, callback) {
    this.setState({ activeIndex: index });
    callback(page.component);
  }

  renderItens(toggleSection) {
    const { pages, activeIndex } = this.state;
    return pages.map((page, index) => (
      <NavItem key={page.label} className={`${activeIndex === index ? 'active' : ''}`} onClick={() => this.handleClick(index, page, toggleSection)}>{page.label}</NavItem>
    ));
  }

  render() {
    return (
      <PageContext.Consumer>
        {({ toggleSection }) => (
          <Navbar
            className="indigo darken-4"
            brand={(
              <div className="row">
                <img className="col s3 offset-s5 m2 offset-m5 l2 xl3 responsive-img" src={Logo} alt="Logo" />
              </div>
            )}
            right
          >
            {this.renderItens(toggleSection)}
          </Navbar>
        )}
      </PageContext.Consumer>
    );
  }
}

export default NavBar;
