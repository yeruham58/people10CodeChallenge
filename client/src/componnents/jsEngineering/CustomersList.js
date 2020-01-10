import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomersList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div
              className="col-md-10"
              style={{
                height: window.innerHeight - 160,
                overflowY: "scroll"
              }}
            >
              {this.props.customers.map(customer => (
                <div
                  key={customer.id}
                  className="row pt-1 pb-1"
                  style={{
                    backgroundColor: `${
                      this.props.customers.indexOf(customer) % 2
                        ? "#e9f6fb"
                        : null
                    }`
                  }}
                >
                  <div className="col-md-1"> {customer.id}</div>
                  <div className="col-md-4"> {customer.email}</div>
                  <div className="col-md-2"> {customer.first_name}</div>
                  <div className="col-md-2"> {customer.last_name}</div>
                  <div className="col-md-3"> {customer.ip}</div>
                </div>
              ))}
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomersList;
