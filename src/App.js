import React, { Component } from 'react'
import Navbar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';


class App extends Component {
  render(){
    return(
      <Router>
        <div className="container">
          <div className="App">
            <Navbar/>
            <hr/>
            <Switch>
              <Route exact path="/" component={Users} />
              <Route exact path="/add" component={AddUser} />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
