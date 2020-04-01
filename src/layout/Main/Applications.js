import React from "react";

import GroceryApp from "../../components/grocery/GroceryController";

const Applications = () => {
  return (
    <section className="section-application" id="applications">
      <div className="applications">
        <div className="u-center-text ">
          <h2 className="heading-secondary applications__title">
            Applications
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="applications__grocery-app">
              <div className="applications__git">
                <a
                  href="https://github.com/Broodercode?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="applications__git-link"
                >
                  &nbsp;
                </a>
              </div>
              <h2 className="applications__grocery-app-heading u-center-text heading-tertiary">
                Grocery List
              </h2>
              <div className="applications__box">
                <GroceryApp />
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="applications__coin-app">
              <div className="applications__git">
                <a
                  href="https://github.com/Broodercode?tab=repositories"
                  target="_blank"
                  className="applications__git-link"
                  rel="noopener noreferrer"
                >
                  &nbsp;
                </a>
              </div>
              <h2 className="applications__grocery-app-heading u-center-text heading-tertiary">
                Class projects
              </h2>
              <div className="applications__box">
                <div className="applications__link-box">
                  <a
                    href="https://github.com/Broodercode?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-text"
                  >
                    Git hub &#8594;
                  </a>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="popup" id="popup-1">
        <div className="popup__content">
          <a href="#" className="popup__close">
            &times;
          </a>
          <div className="u-center-text">
            <h2 className="heading-secondary u-margin-bottom-small u-center-text">
              Grocery List
            </h2>
          </div>
          <div className="popup__application">
            <GroceryApp />
          </div>
        </div>
      </div> */}
      {/* <div className="popup" id="popup-2">
        <div className="popup__content">
          <a href="#" className="popup__close">
            &times;
          </a>
          <div className="u-center-text">
            <h2 className="heading-secondary u-margin-bottom-small u-center-text">
              Coin Sorter
            </h2>
          </div>
          <div className="popup__application">
            <CoinSorter />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Applications;
