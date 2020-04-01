import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      ></input>
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#home" className="navigation__link">
              HOME
            </a>
          </li>
          <li className="navigation__item">
            <a href="#resume" className="navigation__link">
              RESUME
            </a>
          </li>
          <li className="navigation__item">
            <a href="#applications" className="navigation__link">
              APPLICATIONS
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              ABOUT
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contact" className="navigation__link">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
