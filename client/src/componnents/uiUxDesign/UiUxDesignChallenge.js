import React, { Component } from "react";
import CustomerProfile from "./customerProfile/CustomerProfile";
import CustomersDashboard from "./CustomersDashboard";

class UiUxDesignChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: true,
      dashboard: false
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <button
              className={`btn ${
                this.state.profile ? "btn-outline-info" : "btn-light"
              } col-md-6`}
              // style={{ width: "100%" }}
              onClick={() => {
                this.setState({
                  profile: true,
                  dashboard: false
                });
              }}
            >
              Customer Profile
            </button>
            <button
              className={`btn ${
                this.state.dashboard ? "btn-outline-info" : "btn-light"
              } col-md-6`}
              // style={{ width: "100%" }}
              onClick={() => {
                this.setState({
                  profile: false,
                  dashboard: true
                });
              }}
            >
              Customers Dashboard
            </button>
          </div>
          <div>
            {this.state.profile && <CustomerProfile />}
            {this.state.dashboard && <CustomersDashboard />}
          </div>
        </div>
      </div>
    );
  }
}

export default UiUxDesignChallenge;
