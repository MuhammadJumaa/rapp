import React, { Component } from 'react'
import Navbar from './layout/Navbar';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
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
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/edit/:id" component={UpdateUser} />
              <Route component = {NotFound} />
            </Switch>
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
