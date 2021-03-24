import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./Utils/routesImport";
const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
