import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'
import Card from 'components/card.jsx';
import data from 'helpers/testData.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // If isLoggedIn is false Modal will not pop-up
      // Otherwise Modal OnClick: true state
      isLoggedIn: true,
      modalStatus: false,
      isAdmin: true,
    };
  }

  componentDidMount() {
    if(this.state.isLoggedIn) {
      this.setState({ modalStatus: !this.state.modalStatus})
    }
  }


  render() {
    const cardCount = data.cardData.length;
    let card = [];
    for(let i=0; i < cardCount; i++) {
      card.push(<Card key={i.toString()} id={i+1} modalStatus={this.state.modalStatus} data={data.cardData[i]}/>)      
    }
    return (
      <div className="Home">
        <Header adminStatus={this.state.isAdmin}/>
            <header className="App-header">
        </header>
        <div className="row center-align">
          <div className="col m4 s12">
            {card}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
