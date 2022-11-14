import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../product/ProductDetails";
import MainLayOut from "./MainLayOut";
import Navbar from "./Navbar";
export default class MainLayOutRouter extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayOut />}></Route>
          <Route path="/productDetails" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    );
  }
}
