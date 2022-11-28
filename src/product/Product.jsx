import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar, AiFillHeart } from "react-icons/ai";
export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            src={this.props.product.image}
            className="card"
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{this.props.product.name}</h5>
              <AiFillHeart
                className="text-danger"
                style={{ fontSize: "20px" }}
              />
            </div>
            <p className="card-title">{this.props.product.description}</p>
            <div className="d-flex">
              <h5>Rates</h5>
              <div className="mx-2 ">
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiFillStar className="text-warning" />
                <AiOutlineStar className="text-warning" />
              </div>
            </div>

            <Link
              to={`productdetails/${this.props.product.id}/${this.props.product.name}`}
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
