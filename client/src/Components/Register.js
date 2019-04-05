import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function Register(props) {
  const [message, setMessage] = useState('');
  const usernameRef = useRef();
  const passwordRef = useRef();
  const verifyPasswordRef = useRef();

  const registerUser = () => {
    axios
      .post('http://localhost:3300/api/register', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        props.history.push('/login');
      })
      .catch(err => {
        setMessage(`Error: ${err.response.data.message}`);
      });
  };

  const verifyAndRegister = e => {
    e.preventDefault();
    if (passwordRef.current.value === verifyPasswordRef.current.value) {
      registerUser();
    } else {
      setMessage('Passwords dont match');
    }
  };

  return (
    <div>
      <form onSubmit={verifyAndRegister}>
        <div>
          Username: <input type="text" ref={usernameRef} />
        </div>
        <div>
          Password: <input type="password" ref={passwordRef} />
        </div>
        <div>
          Verify password: <input type="password" ref={verifyPasswordRef} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
      <div>{message}</div>
    </div>
  );
}
