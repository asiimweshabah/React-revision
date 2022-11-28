import React from "react";
import { useParams } from "react-router-dom";
import { Database } from "./Database";
const ProductDetails = (props) => {
  const params = useParams();
  const id = Number(params.id);
  const product = Database.filter((product) => product.id === id)[0];

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-5">
          <img src={product.image} alt="" className="w-100" />
        </div>
        <div className="col-8">
          <h4>{product.name}</h4>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
