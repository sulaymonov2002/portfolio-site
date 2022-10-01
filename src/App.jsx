import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import cls from "./App.module.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Enter} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step3} />
        <Route exact path="/step4" component={Step4} />
        <Route exact path="/step5" component={Step5} />
      </Switch>
    </Router>
  );
}

export default App;
