import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function Login(props) {
  const [message, setMessage] = useState('');

  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginUser = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3300/api/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        setMessage(res.data.message);
        localStorage.setItem('token', res.data.token);
        props.history.push('/');
      })
      .catch(err => {
        setMessage(`Error: ${err.response.data.message}`);
      });
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <div>
          Username: <input type="text" ref={usernameRef} />
        </div>
        <div>
          Password: <input type="password" ref={passwordRef} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
}
