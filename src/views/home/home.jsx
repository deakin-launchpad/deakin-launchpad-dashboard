import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'
import Card from 'components/card.jsx'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedState: false,
    }
  }

  componentDidMount() {
    if(!this.state.isLoggedState) {
      console.log(this.state.isLoggedState);
    } else {
      console.log(this.state.isLoggedState);
    }
  }
  
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
