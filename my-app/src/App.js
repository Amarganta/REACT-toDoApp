import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, AddTask, Task, Login, AddUsersForm, User } from "./Screens";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ejemplo" component={Ejemplo} />
        <Route path="/task" component={Task} />
        <Route path="/addtask" component={AddTask} />
        <Route path="/adduser" component={AddUsersForm} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  );
};

export default App;
