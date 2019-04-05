import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Component
function Jokes(props) {
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
    <SDJokesCont>
      <h1>Here are some jokes: </h1>
      {jokes.map((joke, index) => (
        <SDJokesRow className="bckgnd" key={index}>
          {joke.joke}
        </SDJokesRow>
      ))}
    </SDJokesCont>
  );
}

//Styling Of Component

const SDJokesCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  .bckgnd:nth-child(odd) {
    background-color: #2359ac;
  }
  .bckgnd:nth-child(even) {
    background-color: #d81159;
  }
`;

const SDJokesRow = styled.div`
  box-sizing: border-box;
  width: 40%;
  padding: 20px;
  line-height: 1.5;
  color: whitesmoke;
  margin: 10px 0;
  text-align: left;
  border-radius: 5px;
`;
export default Jokes;
