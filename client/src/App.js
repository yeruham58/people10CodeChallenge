import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./componnents/layout/Navbar";
import Landing from "./componnents/layout/Landing";
import EtlCallenge from "./componnents/EtlCallenge";
import WebServiceChallenge from "./componnents/WebServiceChallenge";
import JsEngineeringChallenge from "./componnents/jsEngineering/JsEngineeringChallenge";
import UiUxDesignChallenge from "./componnents/uiUxDesign/UiUxDesignChallenge";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/etl-csv" component={EtlCallenge} />
        <Route exact path="/web-service" component={WebServiceChallenge} />
        <Route exact path="/js" component={JsEngineeringChallenge} />
        <Route exact path="/design" component={UiUxDesignChallenge} />
      </div>
    </Router>
  );
}

export default App;
