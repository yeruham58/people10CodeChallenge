import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

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
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //This timeout is for update the state before filtering
    setTimeout(() => {
      const { id, email, first_name, last_name, ip } = this.state;
      const filterdList = this.props.customers.filter(
        customer =>
          (customer.id.toString() === id || !id) &&
          (customer.email.indexOf(email) === 0 || !email) &&
          (customer.first_name
            .toLowerCase()
            .indexOf(first_name.toLowerCase()) === 0 ||
            !first_name) &&
          (customer.last_name.toLowerCase().indexOf(last_name.toLowerCase()) ===
            0 ||
            !last_name) &&
          (customer.ip.indexOf(ip) === 0 || !ip)
      );
      this.props.updateCustomers(filterdList);
    }, 20);
  }

  onSubmit(e) {
    e.preventDefault();
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
                <button type="button" className="btn btn-primary mr-1">
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
