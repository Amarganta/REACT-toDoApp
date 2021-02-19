import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddUsersForm } from "./Add";
import { List } from "./List";

export const User = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/add" component={AddUsersForm} />
        <Route path="/user/" component={List} />
      </Switch>
    </Router>
  );
};
