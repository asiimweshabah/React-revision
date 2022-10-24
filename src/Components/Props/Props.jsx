import React, { Component } from "react";

export default class Props extends Component {
  // state = { total: " an engineer " };
  render() {
    console.log(this.props);
    return (
      <h3>
        {/* Welcome back! {this.props.person.name1} {this.props.person.name4} */}
        Welcome back! {this.props.guest.name} {this.props.guest.salutation}
      </h3>
    );
  }
}
