import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const challengesLinks = (
      <ul className="navbar-nav">
        <li className="nav-item mr-3">
          <a
            style={{
              color: `${
                window.location.href.indexOf("etl-csv") > 0 ? "white" : "grey"
              }`
            }}
            href="/etl-csv"
          >
            ETL Challenge
          </a>
        </li>
        <li className="nav-item  mr-3">
          <a
            href="/web-service"
            style={{
              color: `${
                window.location.href.indexOf("web-service") > 0
                  ? "white"
                  : "grey"
              }`
            }}
          >
            Web Service Challenge
          </a>
        </li>
        <li className="nav-item  mr-3">
          <a
            href="/js"
            style={{
              color: `${
                window.location.href.indexOf("js") > 0 ? "white" : "grey"
              }`
            }}
          >
            Js Engineering Challenge
          </a>
        </li>
        <li className="nav-item  mr-3">
          <a
            href="/design"
            style={{
              color: `${
                window.location.href.indexOf("design") > 0 ? "white" : "grey"
              }`
            }}
          >
            UI/UX Design Challenge
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {challengesLinks}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
