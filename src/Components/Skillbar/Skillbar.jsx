import React, { useRef, useState } from "react";
import "../../styles/Skillbar.css";
import { Row, Col, Progress } from "antd";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skillbar = ({ skill, percentage, icon, learning }) => {
  const rowRef = useRef();

  const handleMouseEnter = function () {
    sethovering(true);
    rowRef.current.style.background = "var(--testimonial-bg)";
  };

  const handleMouseLeave = function () {
    sethovering(false);
    rowRef.current.style.background = "var(--card-bg)";
  };

  const [hovering, sethovering] = useState(false);
  let per = learning === true ? 100 : percentage;
  console.log(per);

  return (
    // <div className="skill-bar">
    //   <div className="skill-info">
    //     <span className="skill-name">{skill}</span>
    //     <span>
    //         {icon}
    //       </span>
    //     <span className="skill-percentage">{learning ? "Learning" : percentage + "%"}</span>
    //   </div>
    //   <div className="progress">
    //     <div className="progress-bar" style={{ width: `${per}%` }}></div>
    //   </div>

    // </div>

    <Row
      ref={rowRef}
      className="skill-box-row"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => handleMouseLeave()}
    >
      {!hovering ? (
        <Col
          md={24}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row>{icon}</Row>
          <Row
            style={{
              textAlign: "center",
            }}
          >
            {skill}
          </Row>
        </Col>
      ) : (
        <Col
          md={24}
          xs={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="skill-bar-progress"
        >
          <div style={{ width: "3rem"}}>
            <CircularProgressbar
              value={per}
              text={`${learning ? "Learning" : percentage + "%"}`}
            />
          </div>
        </Col>
      )}
    </Row>
  );
};

export default Skillbar;
