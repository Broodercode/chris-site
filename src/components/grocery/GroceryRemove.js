import React, { Component } from "react";

class GroceryRemove extends Component {
  render() {
    return (
      <div className="item-remove">
        <button
          className="item-remove__button"
          onClick={this.props.onRemove}
          value={this.props.itemKey}
        >
          X
        </button>
      </div>
    );
  }
}

export default GroceryRemove;
