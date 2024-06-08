import React from 'react'
import "../../styles/project.css"

let data = [
  {
    title: "Merchant Monetary System",
    describe: "Inventory Delivery System",
    desc: "The project streamlines inventory management by facilitating communication and coordination between shopkeepers, riders, warehouse managers, and employees. It ensures efficient goods storage in warehouses and timely delivery to shopkeepers via designated riders.",
    github: "",
    other: "",
    keySkills: ["LinkedList", "Doubly LinkedList", "Hash Tables", "Binary Search Tree"],
    developed: ".NET Desktop Application"
  },
  {
    title: "Mini Excel",
    describe: "Spreadsheet for Data Manipulation",
    desc: "Mini Excel is a console application designed for spreadsheet data manipulation, offering features such as adding values in rows or columns, deleting, inserting, shifting, performing statistical arithmetic, and saving files. ",
    github: "",
    other: "",
    keySkills: ["LinkedList", "Vectors", "Doubly LinkedList", "Quad LinkedList"],
    developed: "Console Application (C++)"
  },
  {
    title: "DOS Shell",
    describe: "Files & Directories Management",
    desc: "The new DOS Shell is like the old one you're used to. It lets you do things with files and folders using commands you know. You can move, copy, delete, and find files easily, just like before. ",
    github: "",
    other: "",
    keySkills: ["Trees", "Vectors", "Singly LinkedList", "Heap"],
    developed: "Console Application (C++)"
  },
  {
    title: "Falcon Student Maintainer",
    describe: "Course & Assessment Management",
    desc: "The project aims to facilitate comprehensive student management, attendance tracking, and assessment evaluation, integrating features for managing Course Learning Outcomes (CLOs), rubrics, and assessment evaluations.",
    github: "",
    other: "",
    keySkills: ["T-SQL", "DDL", "DML", "MS SQL Server"],
    developed: ".NET Desktop Application (C#)"
  },
  {
    title: "FYP Management",
    describe: "Students Groups, Project & Advisor Management ",
    desc: "The FYP Management project helps with Final Year Projects (FYPs). It lets you create, update, and delete student groups, assign projects to groups, and choose advisors for projects. It also helps evaluate FYPs, making it easier to oversee the whole process.",
    github: "",
    other: "",
    keySkills: ["T-SQL", "DDL", "DML", "MS SQL Server"],
    developed: ".NET Desktop Application (C#)"
  },
  {
    title: "Diabetes Prediction System",
    describe: "Using Machine Learning Diagnose Diabetes",
    desc: "The Diabetes Prediction System utilizes a machine learning model, specifically a Support Vector Machine (SVM) implemented with sci-kit learn, to predict the likelihood of diabetes based on input features. Model has accuracy of 76%",
    github: "",
    other: "",
    keySkills: ["Data Pre-processing", "Classification", "scikit-learn"],
    developed: "Web Application (Flask)"
  },
  {
    title: "Classification of Web Documents",
    describe: "Using KNN, Predict the document category",
    desc: "The project involves implementing K-Nearest Neighbors (KNN) algorithm for web document classification, enabling efficient categorization of content based on similarity to neighboring documents with accuracy ~ 92%. ",
    github: "",
    other: "",
    keySkills: [ "Text Processing", "KNN", "MCS", "Web Scrapping"],
    developed: "Python Console"
  },
  {
    title: "Incog-Files Dev",
    describe: "Secure File Uploading and Processing",
    desc: "Developed a secure web application using React and Node.js, featuring server-side validation and sanitization to prevent common vulnerabilities such as file inclusion attacks and malicious file execution. Utilized VirusTotal API for file scanning and Amazon S3 Bucket for secure storage",
    github: "",
    other: "",
    keySkills: [  "S3 Bucket", "SQL Injection / XSS", "Directory Traversal", "File Inclusion Attack"],
    developed: "Web Application (MERN)"
  },
  {
    title: "Object Detection (YOLOv8)",
    describe: "Crowd & Harmful Objects",
    desc: "Developed a surveillance system utilizing YOLOv8 to detect harmful objects such as guns and fire amidst crowds, triggering alerts via email and WhatsApp upon detection. Implemented using Python on Google Colab, ensuring real-time monitoring for enhanced security measures.",
    github: "",
    other: "",
    keySkills: [ "OpenCV", "YOLOv8", "Mail Gun API", "Model Training"],
    developed: "Google Colab Notebook"
  },

];

const Project = () => {
  return (
    <section id="projects">
      <div className='container'>
        <div className='project-top-content'>
          <h6 className="subtitle">My Projects</h6>
          <h2>Showcasing My Skills</h2>
          <h3 className="highlight">I've developed or worked on</h3>
        </div>

        {
          data.map((element, index)=>{
            return(
              <div className="project-detail">
              <div className='project-box'>
                <div>
                  <div className='project-box-title'>{element.title}</div>
                  <div className='project-box-describe'>{element.describe}</div>
                </div>
                <div className='project-box-developed'>{element.developed}</div>
              </div>
              <div className='project-box-description'>{element.desc}</div>
              <div className='project-box-skills'>{
              element.keySkills.map((skill, index)=>{
                return(
                  <button key={index} className='btn-skill'>{skill}</button>
                )
              })

              }</div>
              <div className='project-box-links portfolio-links'>
                <span>
                  <i class="ri-github-fill"><a href={element.github}></a></i>
                </span>
                <span>
                  <i class="ri-global-line"><a href={element.other}></a></i>
                </span>
              </div>
            </div>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Project
