import React from 'react';
import axios from 'axios';

export default function (Component) {
  const token = localStorage.getItem('token');
  const notLoggedIn = <h3>Please Login to see the database</h3>;
  return (
    <>{token ? <Component {...this.props} /> : notLoggedIn} </>;
  )
}