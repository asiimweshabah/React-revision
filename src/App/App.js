import logo from "../logo.svg";
import "./App.css";
import { Component } from "react";
// import Utils from "../Components/Utils";
import { calculateProduct, calculateSum } from "../Components/Utils";
import DateTime from "./Date";
import showdate from "./Date";

import Props from "../Components/Props/Props";
class App extends Component {
  state = (name = "Asiimwe") => {
    var DateTime =
      showdate.getDate() +
      "/" +
      showdate.getMonth() +
      "/" +
      showdate.getFullYear();
  };

  render() {
    const total = calculateSum(5, 3);
    const product = calculateProduct(5, 3);
    return <div className="App"></div>;
  }
}

export default App;
