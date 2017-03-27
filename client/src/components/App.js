import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';
import Head from './Head';
import Body from './Body';
import Display from './Display';
import Api_Demo from './Api_Demo';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Head}>
          <Route path="/" component={Body} />
          <Route path="/display" component={Display} />
          <Route path="/apidemo" component={Api_Demo} />
        </Route>
      </Router>
    );
  }
}

export default App;
