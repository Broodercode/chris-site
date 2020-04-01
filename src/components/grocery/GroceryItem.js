import React, { Component } from "react";
import GroceryUnit from "./GroceryUnit";

class GroceryItem extends Component {
  render() {
    const checkedState = this.props.completed ? "--completed" : "";
    return (
      <div className="item">
        <p
          className={`item__text${checkedState}`}
        >{`${this.props.item} ${this.props.quantity}`}</p>
        <GroceryUnit
          unit={this.props.unit}
          unitKey={this.props.unitKey}
          onChangeHandler={this.props.onChangeHandler}
          itemKey={this.props.itemKey}
          unitChecked={this.props.unitChecked}
          onToggle={this.props.onToggle}
        />
      </div>
    );
  }
}

export default GroceryItem;
