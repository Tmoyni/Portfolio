import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import scrollToComponent from 'react-scroll-to-component';


class NavBar extends React.Component {

    scrollToTop = () => {
        scroll.scrollToTop();
      };
    

    render() {
        return (
            <nav className="navigation">
                <div className="navigation__logo" onClick={this.scrollToTop}>Triona Moynihan</div>

                <ul className="navigation__list">
                <li className="navigation__list-item" onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>About</li>
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


       
       