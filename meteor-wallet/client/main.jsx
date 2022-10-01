import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { App } from "/imports/ui/App";
import "../imports/api/ContactsMethods"; // We import the methods to get and add data Also in the client side to use Optimistic UI

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});
