import React from "react";
import "../../styles/hero.css";
import herodarkimg from "../../images/p2.png";
import lightimg from "../../images/p.png";
import profileimg from "../../images/profileImg.png";

export default function Hero(props) {

  const handleClick = (e) => {
    e.preventDefaut();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="typewriter">
              <h2>Hi there! This is</h2>
              <h2>SYED HASHIR HUSNAIN</h2>
              <h1 className="highlight profession">Software Engineer</h1>
            </div>
            <p className="description">
            "Web Innovation Architect, Unleashing Possibilities Across the Full Stack"
            </p>
            <div className="hero-btns">
              <button className="primary-btn" href="#about" onClick={handleClick}>Know More</button>
              <a href="https://www.linkedin.com/in/syedhashircs01/"><button className="secondary-btn" >Discover More</button></a>
            </div>
          </div>

          <div className="hero-img">
            <img
              src={profileimg}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
