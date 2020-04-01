import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <span className="">CJS</span>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#home" className="footer__link">
                  home
                </a>
              </li>
              <li className="footer__item">
                <a href="#resume" className="footer__link">
                  resume
                </a>
              </li>
              <li className="footer__item">
                <a href="#applications" className="footer__link">
                  applications
                </a>
              </li>
              <li className="footer__item">
                <a href="#about" className="footer__link">
                  about
                </a>
              </li>
              <li className="footer__item">
                <a href="#contact" className="footer__link">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
