import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Add } from "./Add";
import { List } from "./List";

export const Tasks = () => {
  return (
    <Router>
      <Switch>
        <Route path="/task/add" component={Add} />
        <Route path="/task/" component={List} />
      </Switch>
    </Router>
  );
};
