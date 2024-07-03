import {React, useRef, useEffect, useState} from "react";
import "../../styles/testimonial.css";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import { HiDesktopComputer } from "react-icons/hi"
import ava03 from "../../images/ava-3.jpg";

import Slider from "react-slick";
import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import {FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { SiAmazons3 } from 'react-icons/si';
import { SiCplusplus, SiCsharp, SiPython } from 'react-icons/si';

import { FaPython, FaWindows, FaEye } from 'react-icons/fa';
import { SiMicrosoft } from 'react-icons/si';
import { SiPostgresql, SiMysql } from 'react-icons/si';
import { SiDjango, SiTensorflow } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import Skillbar from "../Skillbar/Skillbar";
import {Row, Col} from 'antd'

export default function Testimonial() {

  
  const skills = [
    { skill: 'HTML5', percentage: 90, icon: <FaHtml5 size={30}/>, learning: false},
    { skill: 'CSS3', percentage: 70, icon: <FaCss3Alt size={30}/> , learning: false},
    { skill: 'JavaScript', percentage: 60, icon: <FaJsSquare size={30}/> , learning: false},
    { skill: 'React JS', percentage: 50, icon: <FaReact size={30}/>, learning: false },
    { skill: 'Node JS', percentage: 70, icon: <FaNodeJs size={30}/>, learning: false },
    { skill: 'MongoDB', percentage: 60, icon: <SiMongodb size={30}/> , learning: false},
    { skill: 'AWS S3 Bucket', percentage: 60, icon: <SiAmazons3 size={30}/> , learning: false},
    { skill: '.NET Framework', percentage: 80, icon: <SiDotnet size={30} />, learning: false },
    { skill: 'Python', percentage: 80, icon: <FaPython size={30}/> , learning: false},
    { skill: 'C++', percentage: 70, icon: <SiCplusplus size={30}/>, learning: false },
    { skill: 'C#', percentage: 75, icon: <SiCsharp size={30}/>, learning: false },
    { skill: 'WinForms', percentage: 90, icon: <FaWindows size={30}/>, learning: false },
    { skill: 'WPF', percentage: 90, icon: <SiMicrosoft size={30}/>, learning: false },
    { skill: 'Computer Vision', percentage: 40, icon: <FaEye size={30}/>, learning: false },
    { skill: 'SQL', percentage: 70, icon: <SiMysql size={30}/> , learning: false},
    { skill: 'Django', percentage: 0, icon: <SiDjango size={30}/>, learning: true },
    { skill: 'Generative AI', percentage: 0, icon: <SiTensorflow size={30}/>, learning: true },
    // Add more skills as needed
  ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true
      };

  return (
    <section id="skills">
      <div className="container" id="blog">
        <div className="slider-content-top">
            <h6 className="subtitle">Skills</h6>
            <h2>Enhancing efficiency in  <span className="highlight">tasks and projects</span></h2>
        </div>

        <Row>

        {/* <div className="slider-wrapper">
          <Slider {...settings}>
          </Slider>
          </div> */}
            {skills.map((skill, index) => (
              <Col md={4} xs={12}>
                  <Skillbar key={index} skill={skill.skill} percentage={skill.percentage} icon={skill.icon} learning={skill.learning} />
              </Col>
            ))}

          </Row>

      </div>

    </section>
  );
}
