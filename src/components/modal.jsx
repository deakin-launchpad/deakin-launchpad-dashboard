import React, { Component } from 'react';
import M from "materialize-css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHeader: 'Fill Modal title here!',
      modalDescription: 'Modal Description goes here',
    }
  }

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      startingTop: "4%",
      endingTop: "10%",
      dismissible: true
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <div ref={Modal => { this.Modal = Modal; }} id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.modalHeader}</h4>
            <p>{this.state.modalDescription}</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a href="#" className="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;