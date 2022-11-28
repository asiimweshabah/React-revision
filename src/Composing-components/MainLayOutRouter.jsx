import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default class MainLayOutRouter extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}
