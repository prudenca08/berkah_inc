import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Login from "./components/Login/Login";
import Daftar from "./components/Daftar/Daftar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/daftar" component={Daftar} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects/:id" component={ProjectsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
