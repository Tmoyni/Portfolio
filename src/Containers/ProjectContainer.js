import React from 'react';
import Project from '../Components/Project'

class ProjectContainer extends React.Component {


    render() {
        return (
            <div className="projects">  
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        );
    }
}


export default ProjectContainer;