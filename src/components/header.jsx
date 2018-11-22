import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EditModal from 'components/editProjectModal.jsx'
import AddModal from 'components/addProjectModal.jsx'
import SideNav from 'components/sideNav.jsx'

class Header extends Component {
  render() {
    // status is to check whether user is admin or not
    const adminStatus = this.props.adminStatus
    const logginStatus = this.props.loginStatus
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Logo</a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              {isAdminCheck(adminStatus, logginStatus)}
             <li> <Link to='/login'>Logout</Link></li>
            </ul>
          </div>
          <SideNav adminStatus={adminStatus}/>
        </nav>
        {addProjectModal(adminStatus, logginStatus)}
        {editProjectModal(adminStatus,logginStatus)}
      </div>
    );
  }
}

var isAdminCheck = (adminStatus,logginStatus) => {
  if(adminStatus && logginStatus) {
    return (
      <>
        <li>
        <div className="editButton modal-trigger" data-target={"modal_edit"}>
          <a className="btn-floating waves-effect waves-light red"><i className="material-icons">edit</i></a>
          <span id="editProjectText">Edit Project</span>
        </div>
        </li>
        <li>
          <div className="addButton modal-trigger">
            <a className="btn-floating waves-effect waves-light red modal-trigger" data-target={"modal_add"}><i className="material-icons">add</i></a>
            <span id="addProjectText">Add Project</span>
          </div> 
        </li>
        </>
    )
  }
}

var editProjectModal = (adminStatus, logginStatus) => {
  if(adminStatus && logginStatus) {
    const modalData = {"title":"Edit Project","description":"Enter Project ID to update."}
    return (
      <>
        <EditModal id="edit" data={modalData}>
        </EditModal>
      </>
    )
  }
}

var addProjectModal = (adminStatus, logginStatus) => {
  if(adminStatus && logginStatus) {
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