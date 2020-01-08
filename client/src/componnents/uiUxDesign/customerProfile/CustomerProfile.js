import React, { Component } from "react";
import { Helmet } from "react-helmet";

import ProfileImg from "./ProfileImg";
import ProfileDetailes from "./ProfileDetailes";
import Interstes from "./Interstes";
import Orders from "./Orders";

export default class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Customer Profile - G4 UI/UX Challenge</title>
        </Helmet>
        <h1 className="text-center mt-3 mb-2">Customer Profile</h1>

        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-md-4">
              <ProfileImg />
            </div>
            <div className="col-md-4">
              <ProfileDetailes />
            </div>
            <div className="col-md-4">
              <Interstes />
            </div>
          </div>
          <Orders />
        </div>
      </div>
    );
  }
}
