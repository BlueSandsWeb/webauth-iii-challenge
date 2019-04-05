import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </>
    );
  }

  handleChange = e => {
    console.log([e.target.name], e.target.value);
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = this.state;
      const login = await axios.post('/auth/login', user)
      console.log(login);
      const token = login.data.token;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(`error: `, error);
    }
  }

}

export default Login;