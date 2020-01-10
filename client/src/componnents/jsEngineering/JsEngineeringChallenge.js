import React, { Component } from "react";
import { Helmet } from "react-helmet";

import customers from "./customers.json";
import CustomersList from "./CustomersList";
import JsonSearch from "./JsonSearch";

class JsEngineeringChallenge extends Component {
  constructor() {
    super();
    this.state = {
      customers: customers,
      filterdCustomers: customers
    };
    this.updateCustomers = this.updateCustomers.bind(this);
  }

  updateCustomers(filterdCustomers) {
    this.setState({ filterdCustomers });
  }

  render() {
    return (
      <div id="app">
        <Helmet>
          <title>Customers App - G4 JS Challenge</title>
        </Helmet>
        <JsonSearch
          customers={this.state.customers}
          updateCustomers={this.updateCustomers}
        />
        <CustomersList customers={this.state.filterdCustomers} />
      </div>
    );
  }
}

export default JsEngineeringChallenge;
