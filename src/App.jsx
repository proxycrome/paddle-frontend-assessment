import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ComingSoon} />
      </Switch>
    </Router>
  );
}

export default App;
