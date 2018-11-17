import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'
import Card from 'components/card.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // If isLoggedState is false Modal will not pop-up
      // Otherwise Modal OnClick: true state
      isLoggedIn: true,
      modalStatus: false,
    };
  }

  componentDidMount() {
    if(this.state.isLoggedIn) {
      this.setState({ modalStatus: true}, () => {
          console.log(this.state.modalStatus);
      }) 
    }
  }

  render() {
    return (
      <div className="Home">
         <Header />
             <header className="App-header">
        </header>
        <div className="row">
          <Card data={this.state.modalStatus} />
          <Card data={this.state.modalStatus} />
        </div>
        <div className="row">
          <Card data={this.state.modalStatus} />
          <Card data={this.state.modalStatus} />
        </div>
      </div>
    );
  }
}

export default Home;
