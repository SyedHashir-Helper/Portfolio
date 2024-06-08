import React from 'react'
import "../../styles/Skillbar.css";

const Skillbar = ({ skill, percentage, icon, learning }) => {
  let per = learning === true ? 100 : percentage
  console.log(per)
    return (
        <div className="skill-bar">
          <div className="skill-info">
            <span className="skill-name">{skill}</span>
            <span>
                {icon}
              </span>
            <span className="skill-percentage">{learning ? "Learning" : percentage + "%"}</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: `${per}%` }}></div>
          </div>
        </div>
      );
}

export default Skillbar
