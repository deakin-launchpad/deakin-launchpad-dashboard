import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EditModal from 'components/editProjectModal.jsx'
import AddModal from 'components/addProjectModal.jsx'

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
              {isAdminCheck(status)}
            <li>
            </li>
             <li> <Link to='/login'>Logout</Link></li>
            </ul>
          </div>
        </nav>
        {addProjectModal(status)}
        {editProjectModal(status)}
      </div>
    );
  }
}

var isAdminCheck = (status) => {
  if(status) {
    return (
      <>
        <li>
          <a className="btn-floating waves-effect waves-light red modal-trigger" data-target={"modal_edit"}><i className="material-icons">edit</i></a>
        </li>
        <li>
          <a className="btn-floating waves-effect waves-light red modal-trigger" data-target={"modal_add"}><i className="material-icons">add</i></a>
        </li>
        </>
    )
  }
}

var editProjectModal = (status) => {
  if(status) {
    const modalData = {"title":"Edit Project","description":"Enter Project ID to update."}
    return (
      <>
        <EditModal id="edit" data={modalData}>
        </EditModal>
      </>
    )
  }
}

var addProjectModal = (status) => {
  if(status) {
    const modalData = {"title":"New Project","description":"Fill the form."}
    return (
      <>
        <AddModal data={modalData} id="add">
        </AddModal>
      </>
    )
  }
}
export default Header;