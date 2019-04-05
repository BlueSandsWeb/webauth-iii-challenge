import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Users from './components/Users/Users';


class App extends Component {
  render() {

    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>&nbsp;|&nbsp;
          <NavLink to='/login'>Login</NavLink>&nbsp;|&nbsp;
          <NavLink to='/register'>Register</NavLink>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/auth/users" component={Users} />
        </main>
      </div>
    );
  }
}

function Home() {
  return (
    <h1>Home Page</h1>
  )
}

export default App;
