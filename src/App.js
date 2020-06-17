import React from 'react';
import './App.css';
import ProjectContainer from './Containers/ProjectContainer'
import ContactContainer from './Containers/ContactContainer';
import { Link, animateScroll as scroll } from "react-scroll";



class App extends React.Component {
// function App() {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
        <div className="App">
          <nav className="navigation">
            <div className="navigation__logo" onClick={this.scrollToTop}>Triona Moynihan</div>

            <ul className="navigation__list">
              <li className="navigation__list-item">
                <Link
                  activeClass="active"
                  to="intro"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >
                </Link>About</li>
              <li className="navigation__list-item">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >
                </Link>Projects</li>
              <li className="navigation__list-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500} >
                </Link>Contact</li>
            </ul>
          </nav>

          <header className="intro" id="intro"> 
            <figure className="intro__shape">
              <img src="https://images.squarespace-cdn.com/content/52845256e4b0ecd5a8451e07/1411001501633-45ZERF22Y3ZJ9N4VEGLW/Triona.jpg?format=500w&content-type=image%2Fjpeg" alt="" className="intro__image"/> 
            </figure>
            <div className="intro__details">
              <div className="intro__about">Hi, I'm <span className="bld-color">Triona Moynihan</span> and I am a New York City based full-stack web developer and designer.</div>
              <div className="intro__links">
                <a className="intro__link" href="https://github.com/Tmoyni" target="_blank" >Github</a>
                <a className="intro__link" href="https://www.linkedin.com/in/trionamoynihan/" target="_blank" >LinkedIn</a>
              </div>
            </div>
          </header>

          <div className="section__headline">Projects</div>
          <ProjectContainer id="projects"/>
          <div className="section__headline bg--green">Contact</div>
          <ContactContainer id="contact"/>
        </div>
    );
  }
}

export default App;
