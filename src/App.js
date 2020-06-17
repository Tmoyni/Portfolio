import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ProjectContainer from './Containers/ProjectContainer';
import ContactContainer from './Containers/ContactContainer';



class App extends React.Component {
  

  render() {
    return (
        <div className="App">
          
          <NavBar />

          <header className="intro" name="intro"> 
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
          
          <section className="section__headline" name="projects">Projects</section>
          <ProjectContainer />
          <section className="section__headline bg--green" name="contact">Contact</section>
          <ContactContainer />
        </div>
    );
  }
}

export default App;
