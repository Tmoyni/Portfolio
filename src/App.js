import React from 'react';
import './App.css';
import ProjectContainer from './Containers/ProjectContainer'
import ContactContainer from './Containers/ContactContainer';

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
        <div className="intro__details">
          <div className="intro__about">Triona Moynihan is a New York City based full-stack web developer with experience in Ruby on Rails and JavaScript-based programming with an extensive background in visual design and passion for digital experiences.</div>
          <div className="intro__links">
            <div className="intro__button">LinkedIn</div>
            <div className="intro__button">Github</div>
          </div>
        </div>
       

      </header>
      <div className="section__headline">Projects</div>
      <ProjectContainer />
      <div className="section__headline bg--green">Contact</div>
      <ContactContainer/>
    </div>
  );
}

export default App;
