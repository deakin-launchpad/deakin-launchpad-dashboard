import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'

class Home extends Component {
  render() {
    return (
      <div className="Home">
         <Header />
             <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <p>  
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
