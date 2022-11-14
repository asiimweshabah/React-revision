import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-secondary ">
        <div className="d-flex container">
          <span className="navbar-brand mb-0 text-white">Navbar</span>
          <Link className="btn btn-success" to={"/login"}>
            Login
          </Link>
        </div>
      </nav>
      //
      //  <div className="justify-content-end">
      //   <span className={this.btnDynamically()}>{this.formatCount()}</span>
      //   <button
      //     onClick={this.handleIncreament}
      //     className="btn btn-secondary m-2"
      //   >
      //     Add
      //   </button>
      //   <button onClick={this.handleReset} className="btn btn-primary m-2">
      //     Reset
      //   </button>
      // </div>
    );
  }

  handleReset = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  handleIncreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  btnDynamically() {
    let classes = "btn m-2 bt";
    classes += this.state.count === 0 ? "n-danger" : "n-warning";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
