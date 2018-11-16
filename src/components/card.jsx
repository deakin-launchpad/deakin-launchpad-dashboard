import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedState: false,
    }
  }

  // click function to check login state
  // if logged in then setState to enable card click modal
  cardClick = () => {
    if(!this.state.isLoggedState) {
      console.log(this.state.isLoggedState);
    } else {
      console.log(this.state.isLoggedState);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6" onClick={this.cardClick}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                Card Title
              </span>
              <p>
                Hello I'm new card.
              </p>
            </div>
            <div className="card-action">
              <a href="">Click Me</a>
              <a href="#">Don't Click Me</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;