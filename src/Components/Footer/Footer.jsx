import React from "react";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analytics",
  },
  {
    path: "#",
    display: "Commerece",
  },
];

const quickLinks02 = [
    {
      path: "#",
      display: "Pricing",
    },
    {
      path: "#",
      display: "Documentation",
    },
    {
      path: "#",
      display: "Guides",
    },
  ];

  const quickLinks03 = [
    {
      path: "#about",
      display: "About",
    },
    {
      path: "#",
      display: "Jobs",
    },
    {
      path: "#blog",
      display: "Blog",
    },
  ];

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <h2>Syed Hashir Husnain</h2>
            <p className="description">Grow With Us</p>
            <p className="small-text description">
            Senior Year @ UET | Software Developer | DL Fellow @ Bytewise | VANAR Ambassador | React Developer | Alpha MLSA | Harvard Aspire Leader Fellow | Learning Generative AI at Bootcamp by XAVOR
            </p>
          </div>

          <div className="footer-quick-links">
            <h3 className="quick-link-title">Solutions</h3>
            <ul className="quick-links">
              {quickLinks01.map((item, index) => (
                <li className="quick-link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-quick-links">
            <h3 className="quick-link-title">Support</h3>
            <ul className="quick-links">
              {quickLinks02.map((item, index) => (
                <li className="quick-link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-quick-links">
            <h3 className="quick-link-title">Company</h3>
            <ul className="quick-links">
              {quickLinks03.map((item, index) => (
                <li className="quick-link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <p className="copyright">Copyright {year}, Developed By Syed Hashir, All Right Reserrved. {" "} </p>
      </div>
    </footer>
  );
};

export default Footer;
