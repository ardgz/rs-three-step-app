import React, { Component } from "react";
import { Consumer } from "../../context";

class Confirmation extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          <React.Fragment />;
        }}
      </Consumer>
    );
  }
}

export default Confirmation;
