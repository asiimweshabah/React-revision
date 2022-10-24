import React, { Component } from "react";
import Props from "../Props/Props";
export default class Container extends Component {
  state = {
    person: [
      { name1: "Asiimwe", name2: "Steven", name3: "Shaban", name4: "Paul" },
    ],
    guest: [
      {
        name: "Asiimwe",
        salutation: "the major Guest",
      },
      {
        name: "John",
        salutation: "the major Host",
      },
      {
        name: "Jacob",
        salutation: "the minor Guest",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {/* {this.state.person.map((person) => {
          return <Props person={person} />;
        })} */}
        {this.state.guest.map((guest) => {
          return <Props key={guest} guest={guest} />;
        })}
      </div>
    );
  }
}
