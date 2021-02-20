import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import { SingIn } from "./SingIn";

export const Public = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/singin" component={SingIn} />
      </Switch>
    </Router>
  );
};
