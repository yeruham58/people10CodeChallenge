import React, { Component } from "react";

class ProfileDetailes extends Component {
  render() {
    return (
      <div>
        <h4>
          <strong>John Doe</strong>
        </h4>
        <div>
          <strong>Email: </strong> john.doe@email.com
        </div>
        <div>
          <strong>Phone: </strong> 123-123-1234
        </div>
        <div>
          <strong>Phone (Mobile): </strong> 123-123-9876
        </div>
        <div>
          <strong>Since: </strong> March 2015
        </div>
        <div>
          <strong>Location: </strong> 162.142.45.140, 8.13333
        </div>
      </div>
    );
  }
}

export default ProfileDetailes;
