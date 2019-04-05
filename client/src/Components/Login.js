import React, { useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//Component
function Login(props) {
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
        props.history.push('/home');
      })
      .catch(err => {
        setMessage(`Error: ${err.response.data.message}`);
      });
  };

  return (
    <SDFormCont>
      <SDForm onSubmit={loginUser}>
        <SDFormRow>
          Username: <input required="required" type="text" ref={usernameRef} />
        </SDFormRow>
        <SDFormRow>
          Password: <input required="required" type="password" ref={passwordRef} />
        </SDFormRow>
        <SDFormRow>
          <input type="submit" value="submit" className="submit-button" />
        </SDFormRow>
      </SDForm>
      <div className="red">{message}</div>
    </SDFormCont>
  );
}

//Styling Of Components
const SDFormCont = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .red {
    padding-top: 10px;
    color: #d81159;
  }
`;

const SDForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const SDFormRow = styled.div`
  padding: 10px;
  input {
    padding: 4px 10px;
    border-radius: 5px;
    border: 1px solid gray;
  }
  .submit-button {
    color: white;
    background-color: #2359ac;
    font-size: 1rem;
    border: none;
    padding: 5px 20px;
  }
`;

export default Login;
