import React from 'react';
import Natours from '../Images/Natours.jpg';
import Trillo from '../Images/Trillo.jpg';
import FantasyStocks from '../Images/FantasyStocks.png';
import Nexter from '../Images/Nexter.jpg';
import Portfolio from '../Images/Portfolio.jpg';
import PostManager from '../Images/PostManager.jpg';

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
                    <a className="project__link" href={this.props.project.url} target="_blank" rel="noopener noreferrer">View</a>
                    <a className="project__link" href={this.props.project.github} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
          </div>
        );
    }
}

export default Project;


       
       