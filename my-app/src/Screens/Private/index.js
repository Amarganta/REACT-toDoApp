import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Tasks } from "./Tasks";
import { User } from "./User";

export const Private = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tasks" component={Tasks} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};
