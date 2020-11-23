import React from 'react';
import Project from '../Components/Project';
import { projectData } from "../Projects/projectData";


class ProjectContainer extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        fetch('https://moynihan-portfolio-api.herokuapp.com/api/v1/projects')
          .then(res => res.json())
          .then(data => this.setState ({
              projects: data
          }))
    }

    render() {
        return (
            <div className="projects">  
                {projectData.map( (project, index) => (
                    <Project key={index} project={project}/>
                ))}
            </div>
        );
    }
}

export default ProjectContainer;