import React from 'react';
import axios from 'axios';

// changes the default url to ENDPOINT in the .env file or 'http://localhost:5000/api
axios.defaults.baseURL = process.env.ENDPOINT || 'http://localhost:5000/api';

// Like local middleware that intercepts axios calls before they go out and adds the token in localstorage (if there is one) to the headers obj
axios.interceptors.request.use(function (requestConfig) {
  const token = localStorage.getItem('token');
  requestConfig.headers.authorization = token;
  return requestConfig;
})

export default function (Component) {
  const token = localStorage.getItem('token');
  const notLoggedIn = <h3>Please Login to see the database</h3>;
  return (
    <>{token ? <Component /> : notLoggedIn} </>
  )
}