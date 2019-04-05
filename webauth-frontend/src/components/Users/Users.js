import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    users: [],
  }

  render() {
    return (
      <>
        <h2>List of users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </>
    )
  }

  componentDidMount() {
    try {
      const userList = axios.get('/users');
      console.log(userList);
      this.setState({ users: userList.data })
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }
}

export default Users;