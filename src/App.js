import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    alert(`Name submitted: ${this.state.value}`);
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter name here"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default App;
