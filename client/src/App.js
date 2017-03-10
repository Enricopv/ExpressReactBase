import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';
import Head from './Head';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={Head}>
          <Route path="/" component={Body} />
        </Route>
      </Router>
    );
  }
}

export default App;
