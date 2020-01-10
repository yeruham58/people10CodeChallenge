import React, { Component } from "react";
import axios from "axios";

import ServerSearch from "./ServerSearch";
import CustomersList from "./CustomersList";

class WebServiceChallenge extends Component {
  constructor() {
    super();
    this.state = {
      customersJsonList: null,
      filterdCustomers: null
    };
    this.updateCustomers = this.updateCustomers.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/customers")
      .then(res => {
        const customersJsonList = res.data;
        this.setState({
          customersJsonList,
          filterdCustomers: customersJsonList
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateCustomers(filterdCustomers) {
    this.setState({ filterdCustomers });
  }

  render() {
    return (
      <div>
        {this.state.filterdCustomers && (
          <div>
            <div>
              <ServerSearch
                customers={this.state.customersJsonList}
                updateCustomers={this.updateCustomers}
              />
            </div>
            <div>
              <CustomersList
                customers={this.state.filterdCustomers}
                updateCustomers={this.updateCustomers}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WebServiceChallenge;
