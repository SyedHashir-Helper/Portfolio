import React, { useState } from "react";
import styled from "styled-components";

const Projects = ({element}) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className="project-detail">
      <div className="project-box" onClick={() => setIsActive(!isActive)}>
        <div>
          <div className="project-box-title">{element.title}</div>
          <div className="project-box-describe">{element.describe}</div>
        </div>
        <div className="project-box-developed">{element.developed}</div>
      </div>
      {isActive && (
        <div>
          <div className="project-box-description">{element.desc}</div>
          <div className="project-box-skills">
            {element.keySkills.map((skill, index) => {
              return (
                <button key={index} className="btn-skill">
                  {skill}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="project-box-links portfolio-links">
        <span>
          <a href={element.github}>
            <i class="ri-github-fill"></i>
          </a>
        </span>
        <span>
          <a href={element.other}>
            {" "}
            <i class="ri-global-line"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }

  .black {
    color: black;
  }

  .white {
    color: #e8aa42;
  }
`;

const Slide = styled.div``;
