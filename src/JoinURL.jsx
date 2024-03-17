import React from 'react'
import { useEffect, useState } from "react";
import Header from './Header.jsx';
import sueImage from './assets/image-sue.png'
import { useNavigate } from "react-router-dom";
// 9:41 - 10:05

function JoinURL() {
  const navigate = useNavigate();
    const goSkills = () => {
        navigate('/skills');
    }
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    async function loginPressed(event) {
        event.preventDefault();
        const serializedBody = JSON.stringify({ name: username, pass: password });
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: serializedBody
        };
        fetch("/api/newuser/", fetchOptions);
      }

      function handleUserChange(e) {
        setUsername(e.target.value);
      }
    
      function handlePassChange(e) {
        setPassword(e.target.value);
      }
  return (
    <div>
        <Header></Header>
      <div className='sign-up'>
        <form className='sign-up-form'>
          <h1>Sign Up as an Employee for ORGANIZATION_NAME</h1>
          <label>Name:</label>
          <input type="text" value={username} onChange={handleUserChange} placeholder="Enter your name"/>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePassChange} placeholder="Enter your password" />
          <button onClick={goSkills}>Join</button>
        </form>
        <div className='hide-dots-mobile'>
        <span className='sue-dot3'></span>
        <img src = {sueImage} alt = "Organization Image"></img>
        </div>
    </div>
    <div className='hide-dots-mobile'>
    <span className='dot1'></span>
    <span className='dot2'></span>
    <span className='sue-dot4'></span>
    </div>
    <span className='dot4'></span>
    </div>
  )
}

export default JoinURL