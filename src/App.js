import React, { Component } from 'react';
import Login from './views/login/login.view';
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
        </div>
      </Router>
    );
  }
}

export default App;
