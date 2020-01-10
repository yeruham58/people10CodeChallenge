import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import TextFieldGroup from "../common/TextFieldGroup";

class CreateAndEditForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      first_name: "",
      last_name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.customer) {
      this.setState({
        email: this.props.customer.email,
        first_name: this.props.customer.first_name,
        last_name: this.props.customer.last_name
      });
    }
  }

  createCustomer(newCustomer) {
    axios
      .post("/api/customers/create", newCustomer)
      .then(res => {
        this.props.updateCustomers(res.data);
        this.props.close();
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateCustomer(id, updateCustomer) {
    axios
      .patch(`/api/customers/${id}`, updateCustomer)
      .then(res => {
        this.props.updateCustomers(res.data);
        this.props.close();
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const submitedCustomer = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    };
    this.props.customer
      ? this.updateCustomer(this.props.customer.id, submitedCustomer)
      : this.createCustomer(submitedCustomer);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div>
                <div>
                  <TextFieldGroup
                    placeholder="First name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                    info="Please enter your first name"
                  />
                </div>

                <div>
                  <TextFieldGroup
                    placeholder="Last name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                    info="Please enter your last name"
                  />
                </div>

                <div>
                  <TextFieldGroup
                    placeholder="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    info="* Please enter your first email"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                  disabled={!this.state.email}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateAndEditForm.propTypes = {
  customer: PropTypes.object,
  updateCustomers: PropTypes.func.isRequired
};

export default CreateAndEditForm;
