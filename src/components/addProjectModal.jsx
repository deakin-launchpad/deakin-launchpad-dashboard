import React, { Component } from 'react';
import axios from 'axios';
import M from "materialize-css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      descriptionShort: '',
      urlWebsite: '',
      urlGit: '',
      imageURL: 'default'
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

  handleNameChange = (event) => {
    this.setState({title: event.target.value})
  }
  handleDescriptionChange = (event) => {
    this.setState({description: event.target.value})
  }
  handleShortDescriptionChange = (event) => {
    this.setState({descriptionShort: event.target.value})
  }
  handleWebsiteLinkChange = (event) => {
    this.setState({urlWebsite:{urlName: "Website URL",urlLink:event.target.value} })
  }
  handleurlGitChange = (event) => {
    this.setState({urlGit:{urlName:"GIT URL",urlLink:event.target.value}})
  }
  

  submitNewProject=()=>{
    console.log(this.state)
    axios.post('https://launchpad-red.au-syd.mybluemix.net/api/dashboard/projects', {
      data: this.state
    });
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
          <div className="input-field col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">label_outline</i>
                <input value={this.state.value} id="projectName" type="text" placeholder="Name" className="validate" onChange={this.handleNameChange} required="required" />
                <label htmlFor="ProjectName">Project Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <textarea value={this.state.value} id="projectID" type="text" placeholder="Short project description" className="materialize-textarea validate" onChange={this.handleShortDescriptionChange} required="required"></textarea>
                <label htmlFor="descriptionShort">Project Insights</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea value={this.state.description} id="description" placeholder="Description of project" className="materialize-textarea validate" onChange={this.handleDescriptionChange} required="required"></textarea>
                <label htmlFor="description">Project Summary</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">link</i>
                <input value={this.state.weblink} id="projectWebsiteLink" type="text" placeholder="Website link" className="validate" onChange={this.handleWebsiteLinkChange} required="required" />
                <label htmlFor="websiteLink">Website URL</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">link</i>
                <input value={this.state.gitLink} id="projectGitLink" type="text" placeholder="Github link" className="validate" onChange={this.handleurlGitChange} required="required" />
                <label htmlFor="githubLink">Git URL</label>
              </div>
              <div className="row">
                <button className="btn waves-effect waves-light modal-close" onClick={this.submitNewProject} name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;