import React, { Component } from "react";
import { Consumer } from "../../context";
import ProductField from "../layout/ProductField";
import "./ProductSelection.css";

class ProductSelection extends Component {
  state = {
    rsEmailQty: "0",
    rsEmailPlusQty: "0",
    msExchangeQty: "0",
    rsEmailTotal: "0",
    rsEmailPlusTotal: "0",
    msExchangeTotal: "0"
  };

  updateTotal = (name, value) => {
    let newState = {};
    if (name === "rsEmailQty" && !isNaN(value)) {
      newState.rsEmailTotal = (Number(value) * 2.0).toFixed(2);
    } else if (name === "rsEmailPlusQty" && !isNaN(value)) {
      newState.rsEmailPlusTotal = (Number(value) * 3.5).toFixed(2);
    } else if (name === "msExchangeQty" && !isNaN(value)) {
      newState.msExchangeTotal = (Number(value) * 7.99).toFixed(2);
    }
    return newState;
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    let newState = this.updateTotal(name, value);
    newState[name] = value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();
    // Perform Validation
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <form onSubmit={this.handleSubmit}>
                <div className="product-row">
                  <div className="product product-label header-row">
                    Product
                  </div>
                  <div className="product product-cost header-row">Cost</div>
                  <div className="product product-quantity-input header-row">
                    Quantity
                  </div>
                  <div className="product product-total header-row">Total</div>
                </div>

                <ProductField
                  label="Rackspace Email ($2 per mailbox per month)"
                  name="rsEmailQty"
                  cost="2.00"
                  value={this.state.rsEmailQty}
                  onChange={this.handleChange}
                  total={this.state.rsEmailTotal}
                />
                <ProductField
                  label="Rackspace Email Plus ($3.50 per mailbox per month)"
                  name="rsEmailPlusQty"
                  cost="3.50"
                  value={this.state.rsEmailPlusQty}
                  onChange={this.handleChange}
                  total={this.state.rsEmailPlusTotal}
                />
                <ProductField
                  label="Microsoft Exchange ($7.99 per mailbox per month)"
                  name="msExchangeQty"
                  cost="7.99"
                  value={this.state.msExchangeQty}
                  onChange={this.handleChange}
                  total={this.state.msExchangeTotal}
                />
                <br />
                <input
                  type="submit"
                  value="Next"
                  className="product-submitButton"
                />
              </form>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ProductSelection;
