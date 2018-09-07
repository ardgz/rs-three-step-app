import React, { Component } from "react";
import { Consumer } from "../../context";

class Checkout extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          <React.Fragment>
            <h1>Confirmation</h1>
          </React.Fragment>;
        }}
      </Consumer>
    );
  }
}

export default Checkout;
