import React, { Component } from 'react';
import Modal from 'components/modal.jsx';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      description: "Hello I'm new card.",
      title: 'Card Title',
      link_1: 'Link 1',
      link_2: 'Link 2',
    }
  }
  
  render() {
    let status = this.props.data;
    var statusCheck = () => {
      if(status) {
        return <Modal />;
      }
    };
    return (
      <div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1 modal-trigger" data-target="modal1">
            <div className="card-content white-text">
              <span className="card-title">
                {this.state.title}
              </span>
              <p>
                {this.state.description}
              </p>
            </div>
            <div className="card-action">
              <a href="#">{this.state.link_1}</a>
              <a href="#">{this.state.link_2}</a>
            </div>
          </div>
        </div>
        {statusCheck()}
      </div>
    );
  }
}

export default Card;