import React from 'react';

class Project extends React.Component {

    render() {
        return (
            <div className="project">
                <figure className="project__shape">
                    <img src={this.props.project.image} alt="project 1" className="project__img"/>
                </figure>          
                <div className="project__name">{this.props.project.name}</div>
                <div className="project__details">{this.props.project.details}</div>
                <div className="project__tech">{this.props.project.tech}</div>
                <div className="project__links">
                    <a className="project__link" href={this.props.project.url} target="_blank">View</a>
                    <a className="project__link" href={this.props.project.github} target="_blank" >Github</a>
                </div>
          </div>
        );
    }
}

export default Project;


       
       