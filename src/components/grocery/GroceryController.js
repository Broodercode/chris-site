import React, { Component } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import nanoid from "nanoid";

let base;
const kg = 1;
const mg = kg / 1000000;
const g = kg / 1000;
const lbs = kg / 2.20462199002039;
const oz = kg / 35.27396195;

const cup = 1;
const gal = cup / 0.0625;
const qt = cup / 0.25;
const pt = cup / 0.5;
const flOz = cup / 8;
const tbsp = cup / 16;
const tsp = cup / 48;
const ltr = cup / 0.236588125;
const ml = cup / 236.588125;

function unitSwitch(u) {
  switch (u) {
    case "mg":
      return (base = mg);
    case "g":
      return (base = g);
    case "lbs":
      return (base = lbs);
    case "oz":
      return (base = oz);
    case "kg":
      return (base = kg);
    case "gal":
      return (base = gal);
    case "qt":
      return (base = qt);
    case "pt":
      return (base = pt);
    case "cup":
      return (base = cup);
    case "flOz":
      return (base = flOz);
    case "tbsp":
      return (base = tbsp);
    case "tsp":
      return (base = tsp);
    case "ltr":
      return (base = ltr);
    case "ml":
      return (base = ml);
    default:
    case "unit":
      return (base = undefined);
  }
}

class GroceryController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [],
      item: "",
      unit: "lbs",
      quantity: "",
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUnitSelect = this.handleUnitSelect.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleItemRemove = this.handleItemRemove.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleListToggle = this.handleListToggle.bind(this);
    this.handleInputToggle = this.handleInputToggle.bind(this);
  }

  handleChange(e) {
    this.setState({ item: e.target.value });
  }

  handleUnitSelect(e) {
    console.log(
      `Click ${e.target.value}  - checked: ${e.target.checked} - state: ${this.state.checked}`
    );
    this.setState({ unit: e.target.value, checked: false });
  }

  handleValue(e) {
    this.setState({ quantity: e.target.value });
  }

  handleUnitChange(quant, u, v, id) {
    const itemList = this.state.groceryItems;

    unitSwitch(u);
    const baseV = base * quant;
    unitSwitch(v);
    const result = baseV / base;

    const index = this.state.groceryItems.findIndex(i => i.key === id);

    itemList[index].quantity = result;
    itemList[index].unit = v;
    itemList[index].checked = false;
    this.setState({
      groceryList: itemList
    });
  }

  handleInputToggle(e) {
    let check = this.state.checked;

    check = e.target.checked ? true : false;

    this.setState({
      checked: check
    });
  }

  handleListToggle(e) {
    const itemList = this.state.groceryItems;
    const id = e.target.id;

    const toggle = e.target.checked;
    const index = this.state.groceryItems.findIndex(i => i.key === id);
    itemList[index].checked = toggle;

    this.setState({
      groceryList: itemList
    });
  }

  handleItemSubmit() {
    const key = nanoid();
    const item = this.state.item;
    const unit = this.state.unit;
    const quantity = this.state.quantity;
    const completed = false;
    const checked = false;
    const newItem = { item, quantity, unit, key, completed, checked };

    this.setState({
      groceryItems: this.state.groceryItems.concat(newItem)
    });
  }

  handleItemRemove(e) {
    const id = e.target.value;
    const groceryItems = this.state.groceryItems;
    const groceryFilter = groceryItems.filter(i => i.key !== id);
    this.setState({
      groceryItems: groceryFilter
    });
  }

  handleComplete(e) {
    const checked = e.target.checked;
    const id = e.target.id;
    const groceryItems = this.state.groceryItems;

    const index = groceryItems.findIndex(i => i.key === id);
    console.log(
      `index: ${index} checked: ${checked} id: ${id} full list: `,
      groceryItems
    );
    const toggle = groceryItems[index].completed === false ? true : false;

    groceryItems[index].completed = toggle;
    this.setState({
      groceryItems: groceryItems
    });
  }
  render() {
    return (
      <div className="grocery">
        <GroceryInput
          onHandleChange={this.handleChange}
          onUnitChange={this.handleUnitSelect}
          onItemSubmit={this.handleItemSubmit}
          quantityValue={this.state.quantity}
          itemValue={this.state.item}
          onValueChange={this.handleValue}
          unit={this.state.unit}
          checked={this.state.checked}
          onToggle={this.handleInputToggle}
        />
        <GroceryList
          itemList={this.state.groceryItems}
          onListUnitChange={this.handleUnitChange}
          onRemove={this.handleItemRemove}
          onComplete={this.handleComplete}
          onToggle={this.handleListToggle}
        />
      </div>
    );
  }
}

export default GroceryController;
