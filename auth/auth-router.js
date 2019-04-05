const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../api/secrets.js');
const db = require('../database/dbConfig.js');

// Create new user
router.post('/register', async (req, res) => {
  try {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 12);
    const [id] = await db('users').insert(user);
    const newUser = await db('users').where({ id }).first();

    const token = generateToken(user);
    res.status(201).json({ message: `Welcome ${user.username}`, token });

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
})

// Login User
router.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    const user = await db('users').where({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `welcome to our database ${user.username}!`,
        token
      });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['student'],         // Todo: Read this from the database instead of hardwiring it.
  };
  secret = secrets.jwtSecret;
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, secret, options);
}

module.exports = router;