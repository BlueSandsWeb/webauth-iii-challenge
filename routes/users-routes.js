const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/dbConfig.js');

router.get('/', async (req, res) => {
  const users = await db('users').select('id', 'username', 'password', 'department');
  res.status(200).json({ users });
})

module.exports = router;