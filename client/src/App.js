import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Import Style
import './App.css';

//Import Components
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Jokes from './Components/Jokes';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={pr => <Home {...pr} />} />
        <Route exact path="/login" render={pr => <Login {...pr} />} />
        <Route exact path="/register" render={pr => <Register {...pr} />} />
        <Route exact path="/jokes" render={pr => <Jokes {...pr} />} />
      </div>
    );
  }
}

export default App;
