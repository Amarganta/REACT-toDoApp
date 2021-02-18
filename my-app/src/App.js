import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Ejemplo, AddTask, AddUser, Task, Login } from "./Screens";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ejemplo" component={Ejemplo} />
        <Route path="/task" component={Task} />
        <Route path="/addtask" component={AddTask} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
