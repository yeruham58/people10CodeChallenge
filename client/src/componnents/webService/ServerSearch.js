import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import axios from "axios";

import TextFieldGroup from "../common/TextFieldGroup";
import CreateAndEditForm from "./CreateAndEditForm";

class ServerSearch extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      email: "",
      first_name: "",
      last_name: "",
      ip: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.searchCustomer = this.searchCustomer.bind(this);
  }

  searchCustomer(params) {
    axios
      .get("/api/customers", { params })
      .then(res => {
        this.props.updateCustomers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSearch(e) {
    const { id, first_name, last_name, email, ip } = this.state;
    e.preventDefault();
    const params = {};
    if (id) params.id = id;
    if (first_name) params.first_name = this.nameFormat(first_name);
    if (last_name) params.last_name = this.nameFormat(last_name);
    if (email) params.email = email.toLowerCase();
    if (ip) params.ip = ip;
    this.searchCustomer(params);
  }

  nameFormat(name) {
    return (
      name.slice(0, 1).toUpperCase() +
      name.slice(1, name.length).toLocaleLowerCase()
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{
              backgroundColor: "#a4c0f4",
              padding: "0px",
              height: "43px"
            }}
          >
            <form
              onSubmit={this.onSubmit}
              style={{
                padding: "0px",
                height: "43px"
              }}
            >
              <div className="col-1 float-left" style={{ padding: "0px" }}>
                <TextFieldGroup
                  placeholder="id"
                  name="id"
                  value={this.state.id}
                  onChange={this.onChange}
                  info=""
                />
              </div>

              <div className="col-2 float-left" style={{ padding: "0px" }}>
                <TextFieldGroup
                  placeholder="First name"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                  info=""
                />
              </div>

              <div className="col-2 float-left" style={{ padding: "0px" }}>
                <TextFieldGroup
                  placeholder="Last name"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                  info=""
                />
              </div>

              <div className="col-3 float-left" style={{ padding: "0px" }}>
                <TextFieldGroup
                  placeholder="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  info=""
                />
              </div>
              <div className="col-3 float-left" style={{ padding: "0px" }}>
                <TextFieldGroup
                  placeholder="IP"
                  name="ip"
                  value={this.state.ip}
                  onChange={this.onChange}
                  info=""
                />
              </div>
              <div className="col-1 float-left" style={{ padding: "0px" }}>
                <button
                  type="button"
                  className="btn btn-primary mr-1"
                  onClick={this.onSearch}
                >
                  <i className="fas fa-search"></i>
                </button>

                <Popup
                  modal
                  trigger={
                    <button type="button" className="btn btn-light">
                      <i className="fas fa-plus"></i>
                    </button>
                  }
                >
                  {close => (
                    <CreateAndEditForm
                      close={close}
                      updateCustomers={this.props.updateCustomers}
                    />
                  )}
                </Popup>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ServerSearch.propTypes = {
  customers: PropTypes.array.isRequired,
  updateCustomers: PropTypes.func.isRequired
};

export default ServerSearch;
