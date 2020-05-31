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
      <header className="App-header">
        <p>
          My Portfolio
        </p>
      </header>
    </div>
  );
}

export default App;
