import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      handleSetActive = (to) => {
        console.log(to);
      }

    render() {
        return (
            <nav className="navigation">
                <div className="navigation__logo" onClick={this.scrollToTop}>Triona Moynihan</div>

                <ul className="navigation__list">
                <li className="navigation__list-item">
                    <Link
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration={500} 
                        // onSetActive={this.handleSetActive} 
                        >
                    </Link>About</li>
                <li className="navigation__list-item">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onSetActive={this.handleSetActive} >
                    </Link>Projects</li>
                <li className="navigation__list-item">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        onSetActive={this.handleSetActive} >
                    </Link>Contact</li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;


       
       