import React from "react";
import Nav from "./navbar";
import Articles from "./articles";
import Shopping from "./shopping";
import { BrowserRouter, Route } from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={Articles} />
      <Route exact path="/myshopping" component={Shopping} />
    </BrowserRouter>
  );
};

export default Index;
