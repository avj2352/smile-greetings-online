import React, { Component } from 'react';
import Login from './views/login/login.view';
import DemoCard from './views/demo-card/demo-card.view';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>          
          <Route exact path="/" component={Login}/>          
          <Route exact path="/demo" component={DemoCard}/>          
        </div>
      </Router>
    );
  }
}

export default App;
