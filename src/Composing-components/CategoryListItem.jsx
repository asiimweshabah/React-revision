import React, { Component } from "react";
export default class CategoryListItem extends Component {
  state = {
    category: this.props.category,
  };
  getBackgroundClass = () => {
    if (this.props.activeItem === this.props.id) {
      return "active";
    }
    return "";
  };
  render() {
    return (
      <li
        className={
          "list-group-item d-flex justify-content-between align-items-start " +
          this.getBackgroundClass()
        }
        onClick={() => this.props.onChildClick(this.props.id, true)}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{this.state.category.name}</div>
        </div>
        <span className="badge bg-primary rounded-pill">
          {this.state.category.numberOfItemsInStock}
        </span>
      </li>
    );
  }
}
