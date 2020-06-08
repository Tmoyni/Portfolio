import React from 'react';

class Project extends React.Component {

    render() {
        return (
            <div className="project">
                <figure className="project__shape">
                <img src="https://harryle.com/src/img/8-natours1.jpg" alt="project image" className="project__img"/>
                </figure>          
                <div className="project__name">Natours</div>
                <div className="project__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className="project__tech">HTML CSS React SASS</div>
                <button className="btn">View</button>
          </div>
        );
    }
}

export default Project;


       
       