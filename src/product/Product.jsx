import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            src={this.props.product.image}
            className="card-img-top "
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-title">{this.props.product.description}</p>

            <p className="card-text"></p>
            <Link className="btn btn-primary" to={"mainlayout/productdetails"}>
              Visit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
