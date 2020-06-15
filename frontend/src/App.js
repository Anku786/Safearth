import React , {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './register';
import Add from './Add';


class App extends Component{
  
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path = '/' component = {Register}/>
          <Route exact path = '/Add' component = {Add}/>
        </Switch>
      </Router>
      );
  }
}

export default App;
