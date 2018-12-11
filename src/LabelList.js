import React, { Component } from "react";
import Label from "./Label";
import Input from "./Input";

class LabelList extends Component {
  createLabels() {
    const list = this.props.list;

    const listItems = list.map(item => (
      <Label>
        <Input type="checkbox" />
        {item}
      </Label>
    ));

    return listItems;
  }

  render() {
    return this.createLabels();
  }
}

export default LabelList;
