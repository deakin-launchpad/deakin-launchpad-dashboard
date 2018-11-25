import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'
import Card from 'components/card.jsx';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // If isLoggedIn is false Modal will not pop-up
      // Otherwise Modal OnClick: true state
      isLoggedIn: true,
      modalStatus: false,
      isAdmin: true,
      cards: [],
    };
  }

  getProjects(){
    axios.get('').then(data=>{
      let cards=data.data.map((card)=>{
        return (
          <Card key={card._id} id={card._id} modalStatus={this.state.modalStatus} data={card.data}/>
        )
      })
      this.setState({cards:cards})
    })
  }

  componentDidMount() {
    document.title = "Deakin Launchpad"
    if(this.state.isLoggedIn) {
      this.setState({ modalStatus: !this.state.modalStatus})
    }
    this.getProjects()
  }


  render() {
    return (
      <div className="Home">
        <Header adminStatus={this.state.isAdmin} loginStatus={this.state.isLoggedIn}/>
            <header className="App-header">
        </header>
          <div className="row center-cols center-align">
            {this.state.cards}
          </div>
      </div>
    );
  }
}

export default Home;
