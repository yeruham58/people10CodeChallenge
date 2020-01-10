import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import axios from "axios";

import CreateAndEditForm from "./CreateAndEditForm";

class CustomersList extends Component {
  constructor() {
    super();
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id, name) {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      axios
        .delete(`/api/customers/${id}`)
        .then(res => {
          this.props.updateCustomers(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
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
                        : "white"
                    }`
                  }}
                >
                  <div className="col-md-1 mt-4"> {customer.id}</div>
                  <div className="col-md-2 mt-4"> {customer.first_name}</div>
                  <div className="col-md-2 mt-4"> {customer.last_name}</div>
                  <div className="col-md-3 mt-4"> {customer.email}</div>
                  <div className="col-md-3 mt-4"> {customer.ip}</div>

                  <div className="col-md-1">
                    <Popup
                      modal
                      trigger={
                        <button type="button" className="btn btn-light mr-1">
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                      }
                    >
                      {close => (
                        <CreateAndEditForm
                          close={close}
                          updateCustomers={this.props.updateCustomers}
                          customer={customer}
                        />
                      )}
                    </Popup>

                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() =>
                        this.deleteUser(customer.id, customer.first_name)
                      }
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
