import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import QuestionDetail from "./components/QuestionList/QuestionDetail";
import TopNav from "./components/Layout/TopNav";
import BottomNav from "./components/Layout/BottomNav";

const routing = (
  <Router>
    <TopNav title="Poll App"></TopNav>
    <div className="container">
      <div className="row">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/questions/:id" component={QuestionDetail} />
        </Switch>
      </div>
    </div>
    <BottomNav msg="Copyright@Deepak"></BottomNav>
  </Router>
);

ReactDOM.render(
  routing,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
