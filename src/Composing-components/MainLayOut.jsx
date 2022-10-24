import React, { Component } from "react";
import Masterdetail from "./Masterdetail";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import "./styles.css";
import Product from "./Product";

export default class MainLayOut extends Component {
  Products = [
    {
      id: 1,
      name: "Solar",
      category: "Electronics",
      description: "Long lasting",
    },
    {
      id: 2,
      name: "Music",
      category: "Entertainment",
      description: "Relaxes your minds",
    },
    {
      id: 3,
      name: "Sports",
      category: "Entertainment",
      description: "Sports world",
    },
    {
      id: 4,
      name: "Copperwires",
      category: "Electronics",
      description: "Strong and stiff",
    },
    {
      id: 5,
      name: "Bulbs",
      category: "Electronics",
      description: "Good quality products",
    },
    {
      id: 6,
      name: "Shandles",
      category: "Foot Ware",
      description: "Good quality shoes",
    },
    {
      id: 7,
      name: "Menshoes",
      category: "Jewellry",
      description: "Strong like a lion",
    },
    {
      id: 8,
      name: "Watches",
      category: "Jewellry",
      description: "Long lasting ",
    },
    {
      id: 9,
      name: "Neckless",
      category: "Jewellry",
      description: "Originally made",
    },
  ];

  state = {
    activeCategoy: "Electronics";
    productsToDispaly: this.Products.filter(
      (Product) => Product.category === "Electronics"
    ),
  };

  handleActiveTabChanges = (activeTab) => {
    const productsToDispaly = this.Products.filter(
      (Products) => Products.category === activeTab
    );
    this.setState({ productsToDispaly });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Masterdetail
                onActiveCategoryChange={this.handleActiveTabChanges}
              />
            </div>
            <div className="col-md-9">
              <Searchbar />
              <div className="row">
                {this.state.productsToDispaly.map((Products, index) => (
                  <div key={index} className="col-md-4 product">
                    <Product name={Products.name} />
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
