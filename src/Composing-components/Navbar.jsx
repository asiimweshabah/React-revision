import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="d-flex container">
        <nav className="navbar navbar-light bg-light ">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <div className="justify-content-end">
          <span className={this.btnDynamically()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncreament}
            className="btn btn-secondary m-2"
          >
            Add
          </button>
          <button onClick={this.handleReset} className="btn btn-primary m-2">
            Reset
          </button>
        </div>
      </div>
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
