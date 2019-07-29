import React, { Component } from "react";
import Nav from "./navbar";
import Articles from "./articles";
import Shopping from "./shopping";
import { BrowserRouter, Route } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Articles} />
        <Route exact path="/myshopping" component={Shopping} />
      </BrowserRouter>
    );
  }
}
