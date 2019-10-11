import React, { useState } from 'react';
// import dotenv from 'dotenv'

import Api from './services/api'
import './App.css';
import logo from './assets/logo.svg';
// dotenv.config();

function App() {
  const [ email, setEmail ] = useState('')
  async function handleSubmit(event) {
    event.preventDefault() 
      const response = await Api.post('/sessions', { email })
      console.log(response)
    }
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>
      <div className="content">
        <p>
          Oferece <strong>spots</strong> para programadores e encontre <strong>talentos </strong> para sua enpresa!
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input 
            id="email"
            type="email"
            placeholder="Seu melhor e-mail"
            onChange={event => setEmail(event.target.value)}
            required
          />

          <button className="login" type="submit">Login</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
