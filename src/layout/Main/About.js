import React from "react";
import image from "../../assets/chris02.jpg";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="about">
        <div className="row">
          <div className="u-center-text">
            <h2 className="heading-secondary u-center-text">About me</h2>
          </div>
          <div className="about__info-box">
            <div className="info-box">
              <figure className="info-box__shape">
                <img src={image} alt="Chris" className="info-box__img" />
                <figcaption className="info-box__caption">
                  Chris Schiebelbein
                </figcaption>
              </figure>
              <h3 className="heading-tertiary u-center-text u-margin-bottom-small">
                Chris Schiebelbein
              </h3>
              <div className="info-box__text">
                <p className="info-box__content">
                  Hello! My name is Chris and I'd like to tell you a little bit
                  about me outside of work! I'm a recent dad of twin girls. I
                  enjoy strategy, crafting, and survival games. I really enjoy
                  learning new things, especially if they're unique! I've picked
                  locks with a paper clip, mastered reading body language, and
                  know all about historic military units and tactics!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
