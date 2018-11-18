import React, { Component } from 'react';
import Modal from 'components/modal.jsx';

class Card extends Component {
  render() {
    let status = this.props.modalStatus;
    var statusCheck = () => {
      if(status) {
        return <Modal data_modal={this.props.data_modal} id={this.props.id} />;
      }
    };
    return (
      <div className={"card_" + this.props.id}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1 modal-trigger" data-target={"modal_" + this.props.id}>
            <div className="card-content white-text">
              <span className="card-title">
                {this.props.data_card.title}
              </span>
              <p>
                {this.props.data_card.description}
              </p>
            </div>
          </div>
        </div>
      {statusCheck()}
      </div>
    );
  }
}

export default Card;