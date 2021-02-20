import { Private } from "./Screens/Private";
import { Public } from "./Screens/Public";
const App = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Private /> : <Public />;
};

export default App;
