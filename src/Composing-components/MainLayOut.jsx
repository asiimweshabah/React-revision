import React, { Component } from "react";
import Masterdetail from "./Masterdetail";

import Searchbar from "./Searchbar";
import "./styles.css";
import Product from "../product/Product";
import { Database } from "../product/Database";
import ChildrenTest from "./ChildrenTest";

export default class MainLayOut extends Component {
  state = {
    activeCategoy: "Electronics",
    searchTerm: null,
    productsToDisplay: Database.filter(
      (Product) => Product.category === "Electronics"
    ),
  };
  refreshProducts = (activeTab, name) => {
    let productsToDisplay = [];
    if (name && name.trim()) {
      productsToDisplay = Database.filter(
        (product) =>
          product.category === activeTab &&
          product.name.toLowerCase().includes(name)
      );
    } else {
      productsToDisplay = Database.filter(
        (product) => product.category === activeTab
      );
    }
    this.setState({
      productsToDisplay,
      activeCategory: activeTab,
      searchTerm: name,
    });
    console.log("state changed");
  };

  handleFilter = (name) => {
    this.refreshProducts(this.state.activeCategoy, name);
  };

  handleActiveTabChange = (activeTab) => {
    this.refreshProducts(activeTab, this.state.searchTerm);
  };
  render() {
    return (
      <div>
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Masterdetail
                onActiveCategoryChange={(activeTab) =>
                  this.handleActiveTabChange(activeTab)
                }
              />
            </div>
            <div className="col-md-9">
              <Searchbar onFilter={this.handleFilter} />
              <div className="row">
                {this.state.productsToDisplay.map((Products, index) => (
                  <div key={index} className="col-md-4 product">
                    <Product product={Products} children={ChildrenTest} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
