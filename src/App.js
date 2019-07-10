import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration.js'
import Login from './Login.js'
import Boards from './Boards.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/boards" component={Boards} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Registration} />
      </Switch>
    </Router>
  );
}

export default App;
