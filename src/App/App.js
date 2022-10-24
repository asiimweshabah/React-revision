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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit your component now<code>src/App.js</code> and save to reload.
            {total + product}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DateTime />
          <Props name={"Shabah"} calculateProduct={calculateProduct} />
        </header>
      </div>
    );
  }
}

export default App;
