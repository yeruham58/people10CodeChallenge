import React, { Component } from "react";
import axios from "axios";

class WebServiceChallenge extends Component {
  constructor() {
    super();
    this.state = {
      customersJsonList: null
    };
  }

  componentDidMount() {
    axios
      .get("/api/customers")
      .then(res => {
        const customersJsonList = res.data;
        this.setState({ customersJsonList });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h3>WebServiceChallenge works</h3>
      </div>
    );
  }
}

export default WebServiceChallenge;
