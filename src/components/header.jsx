import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'components/modal.jsx'

class Header extends Component {
  render() {
    // status is to check whether user is admin or not
    const status = this.props.adminStatus
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
            <li>
              {isAdminCheck(status)}
            </li>
             <li> <Link to='/login'>Logout</Link></li>
            </ul>
          </div>
        </nav>
        {popModal(status)}
      </div>
    );
  }
}

var isAdminCheck = (status) => {
  if(status) {
    return (
        <a className="btn-floating waves-effect waves-light red modal-trigger" data-target={"modal_0"}><i className="material-icons">add</i></a>
    )
  }
}


var popModal = (status) => {
  if(status) {
    const modalData = {"title":"New Project","description":"Fill the form."}
    return (
      <Modal data={modalData} id="0">
        <div className="row">
          <form className="input-field col s12">
            <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">label_outline</i>
                <input id="projectName" type="text" placeholder="Name" className="validate"/>
                <label htmlFor="ProjectName">Project Name</label>
              </div>
              <div className="input-field col s8">
                <i className="material-icons prefix">email</i>
                <input id="projectID" type="text" placeholder="Short project description" className="validate"/>
                <label htmlFor="ProjectID">Project Insights</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id="projectDescription" placeholder="Description of project" className="materialize-textarea"></textarea>
                <label htmlFor="projectDescription">Project Summary</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">link</i>
                <input id="projectID" type="text" placeholder="Website link" className="validate"/>
                <label htmlFor="ProjectID">Website URL</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">link</i>
                <input id="projectID" type="text" placeholder="Github link" className="validate"/>
                <label htmlFor="ProjectID">Git URL</label>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}
export default Header;