import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        step: 2
      };
    case "RESET_PRODUCTS":
      return {
        ...state,
        products: {},
        step: 1
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    step: 1,
    products: {},
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      creditCardNumber: "",
      expirationDate: "",
      cvvCode: "",
      billingAddress: "",
      billingCity: "",
      billingState: "",
      billingZip: ""
    },
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
