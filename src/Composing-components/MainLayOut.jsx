import React, { Component } from "react";
import Masterdetail from "./Masterdetail";

import Searchbar from "./Searchbar";
import "./styles.css";
import Product from "../product/Product";
import image_1 from "../Composing-components/img/bilbs.jpg";
import image_2 from "../Composing-components/img/jewelry.jpg";
import image_3 from "../Composing-components/img/lady shoes.jpg";
import image_4 from "../Composing-components/img/menshoes.jpg";
import image_5 from "../Composing-components/img/music.jpg";
import image_6 from "../Composing-components/img/neckles.jpg";
import image_7 from "../Composing-components/img/smart tv.jpg";
import image_8 from "../Composing-components/img/solar.jpg";
import image_9 from "../Composing-components/img/sports.jpg";
import ChildrenTest from "./ChildrenTest";
import { Link } from "react-router-dom";
export default class MainLayOut extends Component {
  Products = [
    {
      id: 1,
      name: "Solar",
      category: "Electronics",
      description: "Long lasting",
      image: image_8,
      moreDetails: (
        <Link className="text-white" to="/productdetails">
          Visit
        </Link>
      ),
    },
    {
      id: 2,
      name: "Music",
      category: "Entertainment",
      description: "Relaxes your minds",
      image: image_5,
      moreDetails: (
        <Link className="text-white" to="/productdetails/2">
          Visit
        </Link>
      ),
    },
    {
      id: 3,
      name: "Sports",
      category: "Entertainment",
      description: "Sports world",
      image: image_9,
      moreDetails: (
        <Link className="text-white" to="/productdetails/3">
          Visit
        </Link>
      ),
    },
    {
      id: 4,
      name: "Televisions",
      category: "Electronics",
      description: "Clear picture",
      image: image_7,
      moreDetails: (
        <Link className="text-white" to="/productdetails/4">
          Visit
        </Link>
      ),
    },
    {
      id: 5,
      name: "Bulbs",
      category: "Electronics",
      description: "Good quality products",
      image: image_1,
      moreDetails: (
        <Link className="text-white" to="/productdetails/5">
          Visit
        </Link>
      ),
    },
    {
      id: 6,
      name: "Men's footware",
      category: "Foot Ware",
      description: "Good quality shoes",
      image: image_4,
      moreDetails: (
        <Link className="text-white" to="/productdetails/6">
          Visit
        </Link>
      ),
    },
    {
      id: 7,
      name: "Jewellery Watches",
      category: "Jewellry",
      description: "Doesnot fade",
      image: image_6,
      moreDetails: (
        <Link className="text-white" to="productdetails/7">
          Visit
        </Link>
      ),
    },
    {
      id: 8,
      name: "Watches",
      category: "Foot Ware",
      description: "Long lasting ",
      image: image_3,
      moreDetails: (
        <Link className="text-white" to="/productdetails/8">
          Visit
        </Link>
      ),
    },
    {
      id: 9,
      name: "Neckless",
      category: "Jewellry",
      description: "Originally made",
      image: image_2,
      moreDetails: (
        <Link className="text-white" to="/productdetails/9">
          Visit
        </Link>
      ),
    },
  ];

  state = {
    activeCategoy: "Electronics",
    searchTerm: null,
    productsToDisplay: this.Products.filter(
      (Product) => Product.category === "Electronics"
    ),
  };
  refreshProducts = (activeTab, name) => {
    let productsToDisplay = [];
    if (name && name.trim()) {
      productsToDisplay = this.Products.filter(
        (product) =>
          product.category === activeTab &&
          product.name.toLowerCase().includes(name)
      );
    } else {
      productsToDisplay = this.Products.filter(
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
