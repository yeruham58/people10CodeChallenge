import React, { Component } from "react";
import axios from "axios";

class EtlCallenge extends Component {
  constructor() {
    super();
    this.state = {
      mergedJson: null
    };
    this.mergeCsv = this.mergeCsv.bind(this);
  }

  mergeCsv() {
    axios
      .get("/api/csv")
      .then(res => {
        const mergedJson = JSON.stringify(res.data.mergedList);
        this.setState({ mergedJson });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="text-center">
        By pessing this button, Node js code will merge the csv files, and
        return the merged json to here.
        <div>
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={this.mergeCsv}
          >
            Merge
          </button>
        </div>
        {this.state.mergedJson && (
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="card card-body bg-light mb-3 mt-3">
                <div>{this.state.mergedJson}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EtlCallenge;
