import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Jokes(props) {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3300/api/jokes', { headers: { Authorization: localStorage.getItem('token') } })
      .then(res => {
        setJokes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Here are some jokes: </h1>
      {jokes.map((joke, index) => (
        <div key={index}>{joke.joke}</div>
      ))}
    </div>
  );
}
