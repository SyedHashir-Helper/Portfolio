import React from "react";
import "../../styles/hero.css";
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import herodarkimg from "../../images/p2.png";
import lightimg from "../../images/p.png";
import profileimg from "../../images/profile.png";

import {Row, Col} from "antd"
import ContactIcons from "../ContactIcons/ContactIcons";

export default function Hero(props) {

  const contacts =  [
    {
      icon: <FaWhatsapp size={30}/>,
      link: "https://wa.me/+923164219759",
      text: "Whatsapp"
    },
    {
      icon: <FaEnvelope size={30}/>,
      link: "mailto:syedhashir1001@gmail.com",
      text: "Mail"
    },
    {
      icon: <FaPhone size={30}/>,
      link: "tel:+923164219759",
      text: "Contact"
    },
  ]

  const handleClick = (e) => {
    e.preventDefaut();
    alert("Hey")

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
    });
  };
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <Row className="hero-wrapper">
          <Col className="hero-content">
            <div className="typewriter">
              <h2>Hi there! This is</h2>
              <h2>SYED HASHIR HUSNAIN</h2>
              <h1 className="highlight profession">Software Engineer</h1>
            </div>
            <p className="description">
            "Web Innovation Architect, Unleashing Possibilities Across the Full Stack"
            </p>
            <div className="hero-btns">
              <a href="#about"><button className="primary-btn" onClick={handleClick} >Know More</button></a>
              <a href="https://www.linkedin.com/in/syedhashircs01/"><button className="secondary-btn" >Get in touch</button></a>
            </div>

            <Row className="hero-contact-me">
              {
                contacts.map((element, index)=>{
                  return(
                    <ContactIcons
                      element={element}
                    />
                    // <Col key={index} className="icon-con" md={8} xs={8}>
                    //   <a href={element.link}>{element.icon}</a>
                    // </Col>
                  )
                })
              }
            </Row>
          </Col>

          <Col className="hero-img">
            <img
              src={profileimg}
              alt="Hero Image"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
}
