import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components';
import { Inicial } from './pages';
import { PageContext } from './Context';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
    this.state = {
      componentSection: <Inicial />,
      toggleSection: this.toggleSection,
    };
  }

  toggleSection(component) {
    this.setState({ componentSection: component });
  }

  render() {
    const { componentSection, toggleSection } = this.state;
    return (
      <PageContext.Provider value={{ componentSection, toggleSection }}>
        <NavBar />
        {componentSection}
      </PageContext.Provider>
    );
  }
}

export default App;
