import React, { Component } from "react";

export default class CategoryListItem extends Component {
  state = {
    category: this.props.category,
    // category: this.props.category,
    moreDetails: this.props.moreDetails,
  };

  getBackgroundClass = () => {
    if (this.props.activeItem === this.props.id) {
      return "active";
    }
    return "";
  };

  getBadgeClass = () => {
    if (this.props.numberOfItemsInStock > 2) {
      return "bg-success";
    } else {
      return "bg-danger";
    }
  };

  getWarningMessage = () => {
    if (this.props.numberOfItemsInStock < 3) {
      return (
        <span className="text-danger font-size-small">
          The items are about to get out of stock
        </span>
      );
    } else {
      return null;
    }
  };

  render() {
    if (this.props.numberOfItemsInStock > 0) {
      return (
        <li
          className={
            "my-2 list-group-item d-flex justify-content-between align-items-center " +
            this.getBackgroundClass()
          }
          onClick={() => this.props.onChildClick(this.props.id, true)}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{this.state.category.name}</div>
            {this.getWarningMessage()}
          </div>
          <span className={"badge rounded-pill " + this.getBadgeClass()}>
            {this.props.numberOfItemsInStock}
          </span>
        </li>
      );
    } else {
      return null;
    }
  }
}
