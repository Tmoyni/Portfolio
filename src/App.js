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
        <img src="https://images.squarespace-cdn.com/content/52845256e4b0ecd5a8451e07/1411001501633-45ZERF22Y3ZJ9N4VEGLW/Triona.jpg?format=500w&content-type=image%2Fjpeg" alt="" className="intro__image"/> 
        <div className="intro__details">Triona Moynihan is a New York City based full-stack web developer with experience in Ruby on Rails and JavaScript-based programming with an extensive background in visual design and passion for digital experiences.</div>
      </header>
    </div>
  );
}

export default App;
