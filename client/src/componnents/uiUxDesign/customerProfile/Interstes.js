import React, { Component } from "react";

export default class Interstes extends Component {
  render() {
    const interests = [
      "Photography",
      "Speed Cubes",
      "Fortnite",
      "Mother of Dragons"
    ];
    return (
      <div>
        <h4>
          <strong>Interests:</strong>
        </h4>

        <ul className="list-group">
          {interests.map((interes, index) => (
            <li key={index} className="list-group-item">
              <div className="row">
                <div className="col-3 col-lg-2"></div>

                <div className="col-8">
                  <div style={{ color: "green" }}>
                    <strong>{interes}</strong>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
