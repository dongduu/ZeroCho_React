import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Lotto from "../로또/Lotto";

class Games extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/lotto-generator">로또</Link>
        <div>
          <Routes>
            <Route path="/lotto-generator" element={<Lotto />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Games;
