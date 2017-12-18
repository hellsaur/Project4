import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth';
import BikeList from './components/BikeList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {
  constructor(){
    super();
    this.state ={
      auth: Auth.isUserAuthenticated(),
      //shouldGoToDash: false,
    }
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleRegisterSubmit(e, data) {
    console.log(data)
   e.preventDefault();
   fetch('/users',{
     method: 'POST',
     body: JSON.stringify({
       user: {
         username: data.username,
         name: data.name,
         last_name: data.last_name,
         phone_number: data.phone_number,
         email: data.email,
         password: data.password
       }}),
      headers: {
        'Content-Type': 'application/json',
      }
   }).then(res => res.json())
   .then(res =>{
     Auth.authenticateToken(res.token);
     this.setState({
       auth: Auth.isUserAuthenticated(),
       //shouldGoToDash: true,
     });
   }).catch(err => {
     console.log(err);
   })
  }
  
  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type':'application/json',
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token);
      this.setState({
        auth: Auth.isUserAuthenticated(),
        //shouldGoToDash:true,
      });
    }).catch(err => console.log(err));
  }

  handleLogout() {
    fetch('/',{
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`,
      }
    }).then(res=> {
      Auth.deauthenticateToken();
      this.setState({
        auth: Auth.isUserAuthenticated(),
      })
    }).catch(err => console.log(err));
  }

  
  render() {
    return (
      <Router>
        
        <div className="App">
        <Header
        logout = {this.handleLogout}
        auth = {this.state.auth}
        />
      <Route exact path = "/" render={()=> < Home />} />
      <Route exact path = "/bikes" render={()=> <BikeList />} />
      <Route exact path = "/register"
       render = {()=>(this.state.auth)
        ? <Redirect to = "/" />
        : <RegisterForm handleRegisterSubmit = 
        {this.handleRegisterSubmit} />} />
       <Route exact path = "/login" 
       render = {()=>(this.state.auth)
        ? <Redirect to = "/" />
        : <LoginForm handleLoginSubmit =
         {this.handleLoginSubmit}/>} />
         <Route exact path = "/dash"
         render = {()=> <Dashboard />} />
      </div>
      </Router>
    );
  }
}

export default App;
