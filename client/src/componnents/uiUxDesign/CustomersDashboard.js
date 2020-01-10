import React, { Component } from "react";
import { Helmet } from "react-helmet";

import WebServiceChallenge from "../webService/WebServiceChallenge";

export default class CustomersDashboard extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Customers Dashboard - G4 UI/UX Challenge</title>
        </Helmet>
        {/* <h2 className="text-center mt-3 mb-2">
          <strong>Customers Dashboard</strong>{" "}
        </h2> */}
        <WebServiceChallenge />
      </div>
    );
  }
}
