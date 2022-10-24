import React, { Component } from "react";
import image_1 from "../events/assets/product.png";
export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img src={image_1} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
