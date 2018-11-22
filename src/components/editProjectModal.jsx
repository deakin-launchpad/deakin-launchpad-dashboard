import React, { Component } from 'react';
import M from "materialize-css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: '',
      description: '',
      descriptionShort: '',
      urlLink: '',
      gitURL: '',
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

  handleIDChange = (event) => {
    this.setState({id: event.target.value})
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value})
  }
  handleShortDescriptionChange = (event) => {
    this.setState({shortDescription: event.target.value})
  }
  handleWebsiteLinkChange = (event) => {
    this.setState({websiteURL: event.target.value})
  }
  handleGitURLChange = (event) => {
    this.setState({gitURL: event.target.value})
  }

  submitNewProject=()=>{
    console.log(this.state)
  }

  render() {
    return (
      <div ref={Modal => { this.Modal = Modal; }} id={"modal_" + this.props.id} className="modal">
        <div className="modal-content">
          <h4>{this.props.data.title}</h4>
          <div className="divider"></div>
          <p>{this.props.data.description}</p>
        </div>
        <div className="row">
          <form className="input-field col s12">
            <div className="row">
              <div className="input-field col s4">
                <i className="material-icons prefix">label_outline</i>
                <input value={this.state.value} id="projectID" type="text" placeholder="Project ID" className="validate" onChange={this.handleIDChange}  required="required" />
                <label htmlFor="ProjectID">Project ID</label>
              </div>
              <div className="input-field col s8">
                <i className="material-icons prefix">label_outline</i>
                <input value={this.state.value} id="name" type="text" placeholder="Name" className="validate" onChange={this.handleNameChange} required="required" />
                <label htmlFor="name">Project Name</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input id="projectID" type="text" placeholder="Short project description" className="validate" onChange={this.handlede} required="required" />
                <label htmlFor="descriptionShort">Project Insights</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea value={this.state.value} onChange={this.handleDescriptionChange} id="description" placeholder="Description of project" className="materialize-textarea validate" required="required" ></textarea>
                <label htmlFor="description">Project Summary</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">link</i>
                <input value={this.state.value} onChange={this.handleWebsiteLinkChange} id="projectID" type="text" placeholder="Website link" className="validate" required="required" />
                <label htmlFor="websiteLink">Website URL</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">link</i>
                <input value={this.state.value} onChange={this.handleGitURLChange} id="projectID" type="text" placeholder="Github link" className="validate" required="required" />
                <label htmlFor="githubLink">Git URL</label>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light modal-close" name="action" onClick={this.submitNewProject}>Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;