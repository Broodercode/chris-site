import React, { Component } from "react";

import GroceryItem from "./GroceryItem";
import GroceryRemove from "./GroceryRemove";
import GroceryComplete from "./GroceryComplete";

class GroceryList extends Component {
  render() {
    const listItems = this.props.itemList.map(i => {
      const iu = i.unit;
      const iq = i.quantity;
      const ii = i.item;
      const ik = i.key;
      const ic = i.completed;
      const ick = i.checked;

      const listUnitChange = e => {
        this.props.onListUnitChange(i.quantity, i.unit, e.target.value, i.key);
      };

      return (
        <li key={ik} className={`grocery__li`}>
          <div className="grocery__list">
            <GroceryItem
              item={ii}
              unit={iu}
              quantity={iq}
              completed={ic}
              unitKey={ik}
              onChangeHandler={listUnitChange}
              itemKey={ik}
              unitChecked={ick}
              onToggle={this.props.onToggle}
            />
            <GroceryComplete
              itemKey={ik}
              onCompleteHandler={this.props.onComplete}
              completed={ic}
            />
            <GroceryRemove onRemove={this.props.onRemove} itemKey={ik} />
          </div>
        </li>
      );
    });

    return <ul>{listItems}</ul>;
  }
}

export default GroceryList;
