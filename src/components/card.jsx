import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div className="col s12 m6">
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
    );
  }
}

export default Card;