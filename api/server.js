const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../routes/users-routes.js');

const server = express();

const restricted = require('../auth/restricted.js');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;