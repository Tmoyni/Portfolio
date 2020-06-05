import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <div className="navigation__logo">Triona Moynihan</div>
        <ul className="navigation__list">
          <li className="navigation__list-item"> About </li>
          <li className="navigation__list-item"> Projects </li>
          <li className="navigation__list-item"> Contact </li>
        </ul>
      </nav>
      <header className="intro">
        <figure className="intro__shape">
          <img src="https://images.squarespace-cdn.com/content/52845256e4b0ecd5a8451e07/1411001501633-45ZERF22Y3ZJ9N4VEGLW/Triona.jpg?format=500w&content-type=image%2Fjpeg" alt="" className="intro__image"/> 
        </figure>
        <div className="intro__details">Triona Moynihan is a New York City based full-stack web developer with experience in Ruby on Rails and JavaScript-based programming with an extensive background in visual design and passion for digital experiences.</div>
      </header>
      <div className="section__headline">Projects</div>
      <div className="projects">
        <div className="project">
          <figure className="project__shape">
            <img src="https://repository-images.githubusercontent.com/217157261/28158a80-f5ef-11e9-9291-0e16af8a4853" alt="project image" className="project__img"/>
          </figure>          
          <div className="project__name">Natours</div>
          <div className="project__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="project__tech">HTML CSS React SASS</div>
          <button className="btn">View</button>
        </div>
        <div className="project">
          <figure className="project__shape">
            <img src="https://repository-images.githubusercontent.com/217157261/28158a80-f5ef-11e9-9291-0e16af8a4853" alt="project image" className="project__img"/>
          </figure>
          <div className="project__name">Project 2</div>
          <div className="project__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="project__tech">HTML CSS React SASS</div>
          <button className="btn">View</button>
        </div>
        <div className="project">
          <figure className="project__shape">
            <img src="https://repository-images.githubusercontent.com/217157261/28158a80-f5ef-11e9-9291-0e16af8a4853" alt="project image" className="project__img"/>
          </figure>
          <div className="project__name">Project 3</div>
          <div className="project__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="project__tech">HTML CSS React SASS</div>
          <button className="btn">View</button>
        </div>
        <div className="project">
          <figure className="project__shape">
            <img src="https://repository-images.githubusercontent.com/217157261/28158a80-f5ef-11e9-9291-0e16af8a4853" alt="project image" className="project__img"/>
          </figure>
          <div className="project__name">Project 4</div>
          <div className="project__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="project__tech">HTML CSS React SASS</div>
          <button className="btn">View</button>
        </div>
        <div className="project">
          <figure className="project__shape">
            <img src="https://repository-images.githubusercontent.com/217157261/28158a80-f5ef-11e9-9291-0e16af8a4853" alt="project image" className="project__img"/>
          </figure>
          <div className="project__name">Project 5</div>
          <div className="project__details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className="project__tech">HTML CSS React SASS</div>
          <button className="btn">View</button>
        </div>
      </div>
    </div>
  );
}

export default App;
