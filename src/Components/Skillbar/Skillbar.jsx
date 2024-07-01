import React from "react";
import "../../styles/Skillbar.css";
import {Row, Col} from 'antd';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skillbar = ({ skill, percentage, icon, learning }) => {
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

    <Row style={
      {
        margin: "3%",
        background: "var(--card-bg)",
        padding: "5%",
        borderRadius: "10px"
      }
      
    }>
      <Col md={15} xs={15}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row >{icon}</Row>
        <Row style={{
          textAlign: "center"
        }}>{skill}</Row>
      </Col>
      <Col md={9} xs={9}>
        <div style={{width: "80px"}}>
          <CircularProgressbar value={per} text={`${learning ? "Learning" : percentage + "%"}`}/>
        </div>
      </Col>
    </Row>
  );
};

export default Skillbar;
