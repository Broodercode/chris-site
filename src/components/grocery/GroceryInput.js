import React, { Component } from "react";

class Grocery extends Component {
  render() {
    const uc = this.props.onUnitChange;
    const u = this.props.unit;

    return (
      <div className="entry">
        <div className="entry__input-container">
          <input
            className="entry__item"
            type="text"
            value={this.props.itemValue}
            onChange={this.props.onHandleChange}
            placeholder="Item"
          ></input>
        </div>
        <div className="entry__input-container">
          <input
            className="entry__quantity"
            type="number"
            value={this.props.quantity}
            placeholder="Quantity"
            onChange={this.props.onValueChange}
          ></input>
          <div className="entry__unit-container">
            <form className="unit">
              <div className="unit__select">
                <input
                  type="checkbox"
                  className="unit__toggle"
                  value={u}
                  onChange={this.props.onToggle}
                  checked={this.props.checked}
                />
                <div className="unit__button">
                  <div className="unit__selected">
                    <p className="unit__text">{`${u}`}</p>
                  </div>
                </div>
                <div className="unit__options">
                  <div className="unit__option">
                    <input
                      type="radio"
                      name="lbs"
                      value="lbs"
                      className="unit__change"
                      checked={"lbs"}
                      onChange={uc}
                    />
                    <span className="unit__label">lbs</span>
                  </div>
                  <div className="unit__option">
                    <input
                      type="radio"
                      name="oz"
                      value="oz"
                      className="oz"
                      checked={"oz"}
                      onChange={uc}
                    />
                    <span className="unit__label">oz</span>
                  </div>
                  <div className="unit__option">
                    <input
                      type="radio"
                      name="kg"
                      value="kg"
                      className="kg"
                      checked={"kg"}
                      onChange={uc}
                    />
                    <span className="unit__label">kg</span>
                  </div>
                  <div className="unit__option">
                    <input
                      type="radio"
                      name="g"
                      value="g"
                      className="g"
                      checked={"g"}
                      onChange={uc}
                    />
                    <span className="unit__label">g</span>
                  </div>
                  <div className="unit__option">
                    <input
                      type="radio"
                      name="mg"
                      value="mg"
                      className="mg"
                      checked={"mg"}
                      onChange={uc}
                    />
                    <span className="unit__label">mg</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="entry__submit">
          <button
            className="entry__submit-btn"
            onClick={this.props.onItemSubmit}
          >
            <span className="entry__submit-btn-check">&#10004;</span>
            <span className="entry__submit-btn-text">Add Item</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Grocery;
