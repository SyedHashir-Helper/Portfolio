import React from 'react'
import '../../styles/counter.css'
import { FaLinkedin, FaGithub , FaCode, FaUniversity, FaBirthdayCake, FaGraduationCap, FaEnvelope  } from 'react-icons/fa';
const counterData = [
    {
        number: "LinkedIn",
        text: <FaLinkedin size={50}/>,
        link: "https://www.linkedin.com/in/syedhashircs01/"
    },
    {
        number: 'Github',
        text: <FaGithub size={50}/>,
        link: "https://github.com/SyedHashir-Helper"
    },
    {
        number: "LeetCode",
        text: <FaCode size={50}/>,
        link: "https://leetcode.com/u/syedhashircs01/"
    }
]

const basicinfo = [
    {
        number: '31st October 2003',
        text: <FaBirthdayCake size={50}/>
    },
    {
        number: "UET Lahore",
        text: <FaUniversity size={50}/>
    },
    {
        number: "Senior Year",
        text: <FaGraduationCap size={50}/>
    },
]

export default function Counter() {
  return (
    <section id="about" >
        <div className="container">
            <div className="counter-wrapper">
                {
                    basicinfo.map((item, index) => (
                        <div className="counter-item" key={index}>
                            <h4 className="counter-title">{item.text}</h4>
                            <h3 className='counter-number'>{item.number}</h3>
                        </div>
                    ))
                }
            </div>
            <div className="counter-wrapper">
                {
                    counterData.map((item, index) => (
                        <div className="counter-item" key={index}>
                            <h4 className=""><a className='counter-title' href={item.link} target='_blank'>{item.text}</a></h4>
                            <h3 className='counter-number'>{item.number}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
