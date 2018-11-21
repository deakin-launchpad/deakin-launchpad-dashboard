import React, { Component } from 'react';
import M from "materialize-css";

class Modal extends Component {
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
      <div ref={Modal => { this.Modal = Modal; }} id={"modal_" + this.props.data_id} className="modal">
        <div className="modal-content">
          <h4>{this.props.data.title}</h4>
          <div className="divider"></div>
          <p>{this.props.data.description}</p>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;