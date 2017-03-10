import React, { Component } from 'react';
import logo from './logo.svg';
import './Head.css';

class Head extends Component {
  render() {
    return (
      <div className="Head">
        <div className="Head-header">
          <img src={logo} className="Head-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Head;
