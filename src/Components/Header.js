import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Typed from "react-typed";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
    }

    return (
      <header id="home">
        <ParticlesBg color="#25CED1" type="cobweb" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h2>
              <Typed
                strings={[
                  "Student",
                  "Software Developer",
                  "Aspiring Entrepreneur",
                  "Human Being \xa0 :)",
                ]}
                typeSpeed={35}
                backSpeed={25}
              />
            </h2>
            <h3>
              I'm actively searching for internships for Summer 2021. If you're
              interested in hiring me, please don't hesitate to reach out.
            </h3>
            <hr />
            <ul className="social">
              <a href="#contact" className="smoothscroll button btn hire-btn">
                <i className="fa fa-thumbs-up"></i>Hire Me!
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
