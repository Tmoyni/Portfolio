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
                <button className="btn">View</button>
          </div>
        );
    }
}

export default Project;


       
       