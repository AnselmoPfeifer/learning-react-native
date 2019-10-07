import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      <div className="content">
        <p>
          Oferece <strong>spots</strong> 
          para programadores e encontre <strong>talentos para sua enpresa!</strong>
        </p>

        <form>
          <label htmlFor="email">E-mail</label>
          <input 
            id="email"
            type="email"
            placeholder="email"
          />

          <button className="login" type="submit">Login</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
