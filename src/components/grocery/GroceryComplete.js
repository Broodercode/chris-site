import React, { Component } from "react";

class GroceryComplete extends Component {
  render() {
    const itemKey = this.props.itemKey;
    const completed = this.props.completed;

    return (
      <div className="completed">
        <div className="completed__container">
          <input
            type="checkbox"
            name="complete"
            id={itemKey}
            onChange={this.props.onCompleteHandler}
            className="completed__checkbox"
            checked={completed}
          />
          <label htmlFor={itemKey} className="completed__label">
            <span className="completed__label-icon">&#10004;</span>
          </label>
        </div>
      </div>
    );
  }
}

export default GroceryComplete;
