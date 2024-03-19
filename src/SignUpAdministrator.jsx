import React from 'react';
import { useEffect, useState } from "react";
import image_sue from './assets/image-sua.png'
import { useNavigate } from "react-router-dom";
import Header from './Header.jsx'

function SignUpEmployee() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [email, setEmail] = useState("")
  let [orgName, setOrgName] = useState("")
  let [hqAddress, setHqAddress] = useState("")
  const navigate = useNavigate();
  const goSignUpSuccess = () => {
    navigate('/sign-up-successful/');
  }
  async function loginPressed(event) {
    event.preventDefault();
    const serializedBody = JSON.stringify({ name: username, pass: password, mail: email, organization: orgName, address: hqAddress });
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: serializedBody
    };
    fetch("https://atc-2024-valve-anti-cheat-be-linux-web-app.azurewebsites.net/newuser", fetchOptions);
    goSignUpSuccess();
  }

  //bidirectional binding react
  function handleUserChange(e) {
    setUsername(e.target.value);
  }

  function handlePassChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleOrgChange(e) {
    setOrgName(e.target.value);
  }

  function handleHQChange(e) {
    setHqAddress(e.target.value);
  }

  return (
    <div>
      <Header></Header>
      <div className='sign-up'>
        <form className='sign-up-form'>
          <h1>Sign Up as an Organization</h1>
          <label>Name:</label>
          <input type="text" value={username} onChange={handleUserChange} placeholder="Enter your name"/>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePassChange} placeholder="Enter your password" />
          <label>E-mail Address:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
          <label>Organization Name:</label>
          <input type="text" value={orgName} onChange={handleOrgChange} placeholder="Enter your Organization Name"/>
          <label>Headquarter Address:</label>
          <input type="text" value={hqAddress} onChange={handleHQChange} placeholder="Enter your HQ Address"/>
          <button onClick={loginPressed}>Submit</button>
        </form>
        <div className='hide-dots-mobile'>
        <img src={image_sue} alt = "Sign Up Image"></img>
        <span className='dot3'></span>
        </div>
      </div>
      <div className='hide-dots-mobile'>
      <span className='dot1'></span>
      <span className='dot2'></span>
      </div>
      <span className='dot4'></span>
    </div>
        )
}

        export default SignUpEmployee