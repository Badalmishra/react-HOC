import React, { Component } from 'react';
import './App.css';
import './components/ButtonOne';
import Modal from './components/Modal';
import ButtonOne from './components/ButtonOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <h1>HOC BUTTONS</h1>
          <hr></hr>
          <ButtonOne targetModal="1"/>
          <ButtonOne targetModal="2"/>
          <div className="modals">
            <Modal id="1"/>
            <Modal id="2"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
