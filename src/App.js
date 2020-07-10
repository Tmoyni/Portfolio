import React from 'react';
import './App.css';
import ProjectContainer from './Containers/ProjectContainer';
import ContactContainer from './Containers/ContactContainer';
import scrollToComponent from 'react-scroll-to-component';
import { animateScroll as scroll } from "react-scroll";
import Github from './Icons/Github';
import LinkedIn from './Icons/LinkedIn';
import Triona from './Images/Triona.jpg'

class App extends React.Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    return (
        <div className="App">
          
          <nav className="navigation">
            <div className="navigation__logo" onClick={this.scrollToTop}>Triona Moynihan</div>

            <ul className="navigation__list">
              <li className="navigation__item" onClick={() => scrollToComponent(this.Intro, { offset: -50, align: 'top', duration: 1200})}>About</li>
              <li className="navigation__item" onClick={() => scrollToComponent(this.Projects, { offset: -50, align: 'top', duration: 1200})}>Projects</li>
              <li className="navigation__item" onClick={() => scrollToComponent(this.Contact, { offset: -50, align: 'top', duration: 1200})}>Contact</li>
            </ul>
          </nav>

          <header className="intro" name="intro" ref={(section) => { this.Intro = section; }}> 
              <figure className="intro__shape"> 
                <img src={Triona} alt="" className="intro__image"/> 

                <img src="https://images.squarespace-cdn.com/content/52845256e4b0ecd5a8451e07/1411001501633-45ZERF22Y3ZJ9N4VEGLW/Triona.jpg?format=500w&content-type=image%2Fjpeg" alt="" className="intro__image"/> 
              </figure>
              <div className="intro__details">
                <div className="intro__about">Hi, I'm <span className="bld-color">Triona Moynihan</span> and I am a New York City based full-stack developer and designer.</div>
                <div className="intro__links">
                  <a className="intro__link" href="https://github.com/Tmoyni"><Github />Github</a>
                  <a className="intro__link" href="https://www.linkedin.com/in/trionamoynihan/" ><LinkedIn/>LinkedIn</a>
                </div>
              </div>
          </header>
          
          <section className="section__headline" name="projects" ref={(section) => { this.Projects = section; }}>Projects</section>
          <ProjectContainer />
          <section className="section__headline--light bg--dark" name="contact"ref={(section) => { this.Contact = section; }}>Contact</section>
          <ContactContainer />
        </div>
    );
  }
}

export default App;
