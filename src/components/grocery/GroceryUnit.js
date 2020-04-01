import React, { Component } from "react";

class GroceryUnit extends Component {
  toggleInput(e) {
    console.log(e.target.checked);
    return e;
  }
  render() {
    const iu = this.props.unit;
    if (
      iu === "lbs" ||
      iu === "oz" ||
      iu === "kg" ||
      iu === "g" ||
      iu === "mg"
    ) {
      return (
        <div className="unit-container">
          <form className="unit">
            <div className="unit__select">
              <input
                type="checkbox"
                className="unit__toggle"
                onChange={this.props.onToggle}
                id={this.props.unitKey}
                checked={this.props.unitChecked}
              />
              <div className="unit__button">
                <div className="unit__selected">
                  <p className="unit__text">{`${iu}`}</p>
                </div>
              </div>
              <div className="unit__options">
                <div className="unit__option">
                  <input
                    type="radio"
                    name="lbs"
                    value="lbs"
                    className="unit__change"
                    checked={iu === "lbs"}
                    onChange={this.props.onChangeHandler}
                  />
                  <span className="unit__label">lbs</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="oz"
                    value="oz"
                    className="oz"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "oz"}
                  />
                  <span className="unit__label">oz</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="kg"
                    value="kg"
                    className="kg"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "kg"}
                  />
                  <span className="unit__label">kg</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="g"
                    value="g"
                    className="g"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "g"}
                  />
                  <span className="unit__label">g</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="mg"
                    value="mg"
                    className="mg"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "mg"}
                  />
                  <span className="unit__label">mg</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    } else if (
      iu === "gal" ||
      iu === "qt" ||
      iu === "pt" ||
      iu === "cup" ||
      iu === "flOz" ||
      iu === "tbsp" ||
      iu === "tsp" ||
      iu === "ltr" ||
      iu === "ml"
    ) {
      return (
        <div>
          <form className="unit">
            <div className="unit__select">
              <input type="checkbox" className="unit__toggle" />
              <div className="unit__button">
                <div className="unit__selected">
                  <p className="unit__text">{`${iu}`}</p>
                </div>
              </div>
              <div className="unit__options">
                <div className="unit__option">
                  <input
                    type="radio"
                    name="gal"
                    value="gal"
                    className="unit__change"
                    checked={iu === "gal"}
                    onChange={this.props.onChangeHandler}
                  />
                  <span className="unit__label">gal</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="qt"
                    value="qt"
                    className="qt"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "qt"}
                  />
                  <span className="unit__label">qt</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="pt"
                    value="pt"
                    className="pt"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "pt"}
                  />
                  <span className="unit__label">pt</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="cup"
                    value="cup"
                    className="cup"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "cup"}
                  />
                  <span className="unit__label">cup</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="flOz"
                    value="flOz"
                    className="flOz"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "flOz"}
                  />
                  <span className="unit__label">flOz</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="tbsp"
                    value="tbsp"
                    className="tbsp"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "tbsp"}
                  />
                  <span className="unit__label">tbsp</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="tsp"
                    value="tsp"
                    className="tsp"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "tsp"}
                  />
                  <span className="unit__label">tsp</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="ltr"
                    value="ltr"
                    className="ltr"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "ltr"}
                  />
                  <span className="unit__label">ltr</span>
                </div>
                <div className="unit__option">
                  <input
                    type="radio"
                    name="ml"
                    value="ml"
                    className="ml"
                    onChange={this.props.onChangeHandler}
                    checked={iu === "ml"}
                  />
                  <span className="unit__label">ml</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default GroceryUnit;
