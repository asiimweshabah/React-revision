import React, { Component } from "react";

export default class Example1 extends Component {
  // handleButtonClick = () => {
  //   console.log("Button clicked");
  //   console.log(this.props.Numbers);
  // };

  state = {
    items: [
      { id: 1, firstName: "Asiimwe", secondName: "Shaban", age: 3 },
      { id: 2, firstName: "Nakkungu", secondName: "Jamilah", age: 3 },
      { id: 3, firstName: "Ssentamu", secondName: "Paulo", age: 3 },
      { id: 4, firstName: "Bunjo", secondName: "Steven", age: 3 },
      { id: 5, firstName: "Sakaru", secondName: "Winnie", age: 3 },
    ],
  };

  handleDelete = (id) => {
    const people = this.state.items.filter(function (items) {
      return items.id !== id;
    });
    this.setState({ items: people });
  };

  handleAgeIncreament = (id) => {
    const items = this.state.items.map(function (item) {
      if (item.id === id) {
        item.age++; //item.age +=1;  // item.age + 1;
      }
      return item;
    });

    this.setState({ items: items });
  };

  handleSecondNameChanged = (id, inputId) => {
    console.log("Changed");
    const name = document.getElementById(inputId).value;
    const newItems = this.state.items.map(function (items) {
      if (items.id === id) {
        return {
          id: items.id,
          firstName: items.firstName,
          secondName: name,
        };
      }
      return { ...items };
    });
    this.setState({ items: newItems });
  };
  handleAdd = () => {
    console.log("Added me");
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    const newItems = [...this.state.items];
    newItems.push({
      firstName,
      secondName,
      id: this.state.items.length + 1,
    });

    this.setState({ items: newItems });
  };
  render() {
    return (
      <div className="container">
        <div
          className="row d-flex justify-content-center justify-content-evenly "
          style={{ margin: 32 }}
        >
          <div className="col-3">
            <input id="firstName" className="control" />
          </div>
          <div className="col-3">
            <input id="secondName" className="control" />
          </div>
          <div className="col-3">
            <button
              onClick={() => this.handleAdd()}
              className="btn btn-primary"
            >
              Add me
            </button>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>SecondName</th>
              <th>Delete</th>
              <th>Increament</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((items, index) => (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.firstName}</td>

                <td>
                  <input
                    id={"input-field_" + index}
                    type="text"
                    className="control control-lg"
                    value={items.secondName}
                    onChange={() =>
                      this.handleSecondNameChanged(
                        items.id,
                        "input-field_" + index
                      )
                    }
                  />
                </td>
                <th>
                  <button
                    onClick={() => this.handleDelete(items.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => this.handleAgeIncreament(items.id)}
                    className="btn btn-success"
                  >
                    Increament Age
                  </button>
                </th>
                <td>{items.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-lg btn-primary m-8"
          onClick={() => this.handleButtonClick()}
        >
          Clicked
        </button>
      </div>
    );
  }
}
