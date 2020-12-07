import React, { Component } from 'react';
import "./style.css"
// import custom css for flex-box
class Project extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading text-center panel-relative">
            <strong>{this.props.name}</strong>
          </div>
          <div className="panel-body text-center panel-relative">
            <img 
              className="img-responsive center-block"
              src={this.props.src}
              alt={this.props.name}
            ></img>

            <p className="panel-text">
              {this.props.description}
            </p>

            <a
              href={this.props.repo}
              className="btn btn-secondary"
            >
              Visit Repo
            </a>

            <a
              href={this.props.website}
              className="btn btn-secondary"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    )
  }
};

export default Project