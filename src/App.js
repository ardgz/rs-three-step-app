import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductSelection from "./components/pages/ProductSelection";
import { Provider } from "./context";

class App extends Component {
  handleSubmit = e => {
    alert(`Name submitted: ${this.state.value}`);
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductSelection} />
            {/* <Route exact path="/step2" component={Checkout} /> */}
            {/* <Route exact path="/step3" component={Confirmation} /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
