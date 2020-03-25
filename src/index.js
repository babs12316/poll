import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import QuestionDetail from './components/QuestionDetail/QuestionDetail';

const routing = (
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Switch>
      <Route exact path="/" component={App} />
      <Route path="/questions/:id" component={QuestionDetail} />
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  routing,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
