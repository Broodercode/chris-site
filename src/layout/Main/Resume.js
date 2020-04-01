import React from "react";
import resume from "../../assets/ChrisSchiebelbein.docx";

const Resume = () => {
  return (
    <section className="section-resume" id="resume">
      <div className="resume">
        <div className="row">
          <div className="resume__box">
            <div className="u-center-text ">
              <h2 className="heading-secondary resume__title">Resume</h2>
            </div>
            <div className="resume__text-container">
              <ul className="resume__list">
                <li className="resume__item">
                  <span className="resume__html"></span>HTML
                </li>
                <li className="resume__item">
                  <span className="resume__css"></span>
                  CSS
                </li>
                <li className="resume__item">
                  <span className="resume__js"></span>
                  Javascript
                </li>
                <li className="resume__item">
                  <span className="resume__react"></span>
                  React
                </li>
                <li className="resume__item">
                  <span className="resume__sass"></span>
                  Sass
                </li>
                <li className="resume__item">
                  <span className="resume__xd"></span>
                  UX/UI Design
                </li>
                <li className="resume__item">
                  <span className="resume__node"></span>
                  Node.js
                </li>
                <li className="resume__item">
                  <span className="resume__vscode"></span>
                  VScode
                </li>
              </ul>
            </div>
            <div className=" u-center-text u-margin-top-small">
              <a
                href={resume}
                download="chris_schiebelbein_resume.docx"
                className="btn-text"
              >
                Download Resume (ms word)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
