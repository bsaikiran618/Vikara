import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import NewIssue from './Components/NewIssue';
import React from 'react';
import Feed from './Components/Feed';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route path = "/Signup" component = {Signup}/>
            <Route path = "/NewIssue" component = {NewIssue}/>
            <Route exact path = "/Feed" component = {Feed}/>

            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
