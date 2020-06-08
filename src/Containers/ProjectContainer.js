import React from 'react';
import Project from '../Components/Project'

class ProjectContainer extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/projects')
          .then(res => res.json())
          .then(data => this.setState ({
              projects: data
          }))
    }

    render() {
        return (
            <div className="projects">  
            {this.state.projects.map( project => (
                <Project key={project.id} project={project}/>
            ))}
            </div>
        );
    }
}

export default ProjectContainer;