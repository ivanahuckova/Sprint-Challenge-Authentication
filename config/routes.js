const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

async function register(req, res) {
  try {
    let { username, password } = req.body;
    if (username && password) {
      let hash = bcrypt.hashSync(password, 10);
      password = hash;
      const newUser = await db('users').insert({ username, password });
      res.status(201).json({ id: newUser[0], username, password });
    } else {
      res.status(400).json({ message: 'Make sure that username and password are included ' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
