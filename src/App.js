import React, { Component, PropTypes } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Login from './views/login/login.view';
import DemoCard from './views/demo-card/demo-card.view';
import './index.css';

class App extends Component {
  render() {  
    return (
      <Router>
        <div>
          <Route path="/" component={Login}/>
          <Route path="/demo" component={DemoCard}/>
        </div>
      </Router>
    );
  }//end:render
}//end:App

export default App;