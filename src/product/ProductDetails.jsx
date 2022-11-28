// import React from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = (props) => {
//   const routeParams = useParams();
//   const Products = this.props.Products.filter(
//     (product) => product.id === +routeParams.id
//   )[0];
//   return <div>{<h2>{this.Product.image}</h2>}</div>;
// };

// export default ProductDetails;
import React, { Component } from "react";

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        ProductDetails
        {this.props.Products.name}
      </div>
    );
  }
}
