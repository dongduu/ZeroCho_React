import React, { Component } from "react";
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";
import Lotto from "../로또/Lotto";

class Games extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/lotto-generator">로또</Link>
        <div>
          <Route path="/lotto-generator" component={Lotto} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Games;
