import React, { Component } from "react";
import CategoryListItem from "./CategoryListItem";
export default class MasterDetail extends Component {
  state = {
    activeItem: "Electronics",
    categories: [
      {
        name: "Electronics",
        numberOfItemsInStock: 3,
        image: "",
      },
      {
        name: "Foot Ware",
        numberOfItemsInStock: 1,
        image: "",
      },
      {
        name: "Jewellry",
        numberOfItemsInStock: 2,
        image: "",
      },
      {
        name: "Entertainment",
        numberOfItemsInStock: 2,
        image: "",
      },
    ],
  };
  handleChildClick = (id, isActive) => {
    let activeItem = null;
    if (isActive) {
      activeItem = id;
    }
    this.setState({ activeItem });
    this.props.onActiveCategoryChange(activeItem);
  };
  render() {
    return (
      <ol className="list-group">
        {this.state.categories.map((category) => {
          return (
            <CategoryListItem
              key={category.name}
              id={category.name}
              category={category}
              name={category.name}
              number={category.numberOfItemsInStock}
              onChildClick={this.handleChildClick}
              activeItem={this.state.activeItem}
            />
          );
        })}
      </ol>
    );
  }
}
