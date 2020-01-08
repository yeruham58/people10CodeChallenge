import React, { Component } from "react";
import ExampleProfileImg from "../../../img/exampleProfileImg.jpeg";

class ProfileImg extends Component {
  render() {
    return (
      <div>
        <img
          src={ExampleProfileImg}
          alt=""
          className="rounded mb-4"
          style={{ maxWidth: "400px" }}
        />
      </div>
    );
  }
}

export default ProfileImg;
