import React from "react";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header__logo-box"></div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            Hi, <br />
            I'm&nbsp;
          </span>
          <span className="heading-primary--flavour-1">Chris</span>
          <span className="heading-primary--flavour-2">.</span>
        </h1>
      </div>
      <div className="header__info-box">
        <div className="info-box">
          <div className="info-box__text">
            <span className="heading-tertiary">
              Find out why I'll be a great fit for your team
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
