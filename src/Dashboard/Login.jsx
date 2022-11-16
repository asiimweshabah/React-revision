import React, { Component } from "react";
// import DashboardHome from "./DashboardHome";
import { Link } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">
        <div className="container text-center my-5">
          <div>
            <h3 className="text-center my-5">Sign in </h3>
          </div>
          <input type="text" className="w-50" placeholder="UserName" />
          <br />
          <input
            type="password my"
            className="w-50 my-5"
            placeholder="Password"
          />
          <br />

          <Link to={"/DashboardHome"} className="w-50 btn btn-danger">
            Submit
          </Link>
        </div>
      </div>
    );
  }
}
