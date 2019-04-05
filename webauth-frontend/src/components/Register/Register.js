import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    department: ''
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
          <div>
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              id="department"
              value={this.state.department}
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
      const newUser = this.state;
      console.log(newUser);
      const register = await axios.post('http://localhost:5000/auth/login', newUser);
      console.log(register);
    } catch (error) {
      console.error(`Error: ${error}`);
    }

  }

}

export default Register;