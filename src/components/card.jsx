import React, { Component } from 'react';
import Cover from 'images/intro-bg.png'
class Card extends Component {

  render() {
    console.log('[DASHBOARD 2]',this.props.data)
    return (
      <div className="col s4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.data.imageURL} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{this.props.data.title}<i className="material-icons right">more_vert</i></span>
            <p><a href={this.props.data.urlWebsite}>Launch Application</a>
            &nbsp;&nbsp;<a href={this.props.data.urlScrollStory}>Launch Scroll Story</a>
            &nbsp;&nbsp;<a href={this.props.data.urlDashboardURL}>Launch Dashboard</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.data.description}<i className="material-icons right">close</i></span>
            <p>{this.props.data.descriptionShort}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
