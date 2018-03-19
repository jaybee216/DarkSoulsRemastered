import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CalculatorForm } from './components/CalculatorForm';
import { Contact } from './components/Contact';

export default class App extends Component {
  displayName = "DS Remastered AR Calculator"

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/calculator' component={CalculatorForm} />
        <Route path='/contact' component={Contact} />
      </Layout>
    );
  }
}
