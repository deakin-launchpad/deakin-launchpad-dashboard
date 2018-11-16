import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'
import Card from 'components/card.jsx'

class Home extends Component {
  render() {
    return (
      <div className="Home">
         <Header />
             <header className="App-header">
        </header>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Home;
