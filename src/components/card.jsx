import React, { Component } from 'react';
import Modal from 'components/modal.jsx';
import cardImage from 'images/deakin-logo.svg'
import Octicon, {LogoGithub} from '@githubprimer/octicons-react'

class Card extends Component {
  render() {
    let status = this.props.modalStatus;
    var statusCheck = () => {
      if(status) {
        return (
          <Modal data={this.props.data} id={this.props.id}>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-light btn"><Octicon icon={LogoGithub}/></a>
              <a href={this.props.data.url.urlLink} className="modal-close waves-effect waves-light btn">{this.props.data.url.urlName}</a>
            </div>
          </Modal>
        );

      }
    };
    
    return (
        <div className={"card card_"+ this.props.id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt={"cardImage_" + this.props.id} src={cardImage} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.data.title}<i className="material-icons right">more_vert</i></span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.data.title}<i className="material-icons right">close</i></span>
            <div className="divider"></div>
            <p>{this.props.data.descriptionShort}</p>
            <button data-target={"modal_" + this.props.id} className="btn modal-trigger">
              Long Description
            </button>
          </div>
          {statusCheck()}
        </div>
    );
  }
}

export default Card;