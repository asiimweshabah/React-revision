import "./App.css";
import { Component } from "react";
// import Utils from "../Components/Utils";
// import { calculateProduct, calculateSum } from "../Components/Utils";
// import DateTime from "./Date";
// import showdate from "./Date";

// import Props from "../Components/Props/Props";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ShoppingCart from "../cart/ShoppingCart";
import Login from "../Dashboard/Login";
import DashboardHome from "../Dashboard/DashboardHome";
// import Product from "../product/Product";
import ProductDetails from "../product/ProductDetails";
import MainLayOutRouter from "../Composing-components/MainLayOutRouter";
import MainLayOut from "../Composing-components/MainLayOut";
class App extends Component {
  // state = (name = "Asiimwe") => {
  //   var DateTime =
  //     showdate.getDate() +
  //     "/" +
  //     showdate.getMonth() +
  //     "/" +
  //     showdate.getFullYear();
  // };

  render() {
    // const total = calculateSum(5, 3);
    // const product = calculateProduct(5, 3);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"mainlayout"} />} />
          <Route path="/mainlayout" element={<MainLayOutRouter />}>
            <Route index element={<MainLayOut />}></Route>
            <Route
              path="productDetails/:id/:title"
              element={<ProductDetails />}
            ></Route>
          </Route>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboardHome" element={<DashboardHome />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
