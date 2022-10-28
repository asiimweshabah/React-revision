import React, { Component } from "react";
import Masterdetail from "./Masterdetail";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import "./styles.css";
import Product from "./Product";
import image_1 from "../Composing-components/img/bilbs.jpg";
import image_2 from "../Composing-components/img/jewelry.jpg";
import image_3 from "../Composing-components/img/lady shoes.jpg";
import image_4 from "../Composing-components/img/menshoes.jpg";
import image_5 from "../Composing-components/img/music.jpg";
import image_6 from "../Composing-components/img/neckles.jpg";
import image_7 from "../Composing-components/img/smart tv.jpg";
import image_8 from "../Composing-components/img/solar.jpg";
import image_9 from "../Composing-components/img/sports.jpg";

export default class MainLayOut extends Component {
  Products = [
    {
      id: 1,
      name: "Solar",
      category: "Electronics",
      description: "Long lasting",
      image: { image_1 },
    },
    {
      id: 2,
      name: "Music",
      category: "Entertainment",
      description: "Relaxes your minds",
      image: { image_2 },
    },
    {
      id: 3,
      name: "Sports",
      category: "Entertainment",
      description: "Sports world",
      image: { image_3 },
    },
    {
      id: 4,
      name: "Televisions",
      category: "Electronics",
      description: "Strong and stiff",
      image: { image_4 },
    },
    {
      id: 5,
      name: "Bulbs",
      category: "Electronics",
      description: "Good quality products",
      image: { image_5 },
    },
    {
      id: 6,
      name: "Ladies footware",
      category: "Foot Ware",
      description: "Good quality shoes",
      image: { image_6 },
    },
    {
      id: 7,
      name: "Menshoes",
      category: "Jewellry",
      description: "Strong like a lion",
      image: { image_7 },
    },
    {
      id: 8,
      name: "Watches",
      category: "Jewellry",
      description: "Long lasting ",
      image: { image_8 },
    },
    {
      id: 9,
      name: "Neckless",
      category: "Jewellry",
      description: "Originally made",
      image: { image_9 },
    },
  ];

  state = {
    // activeCategoy: "Electronics";
    productsToDispaly: this.Products.filter(
      (Product) => Product.category === "Electronics"
    ),
  };

  handleFilter = (name) => {
    const productsToDispaly = this.Products.filter((Products) =>
      Products.name.toLowerCase().includes(name)
    );
    this.setState({ productsToDispaly });
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
              <Searchbar onhandleFilter={this.handleFilter} />
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
