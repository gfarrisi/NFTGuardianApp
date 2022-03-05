import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Dashboard from "views/Dashboard";
import Settings from "views/Settings";
import Disputes from "views/Disputes";
import NFTDetails from "views/NFTDetails";
import Verify from "views/Verify";
import Unverify from "views/Unverify";
// import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} /> */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/disputes" exact component={Disputes} />
      <Route path="/details" exact component={NFTDetails} />
      <Route path="/verify" exact component={Verify} />
      <Route path="/unverify" exact component={Unverify} />
      <Route path="/" exact component={Landing} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
