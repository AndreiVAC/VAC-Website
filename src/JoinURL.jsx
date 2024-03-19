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
  let [validUser, setValidUser] = useState(false)
  let [password, setPassword] = useState("")
  let [validPass, setValidPass] = useState(false)
  let [email, setEmail] = useState("")
  let [validMail, setValidMail] = useState(false)
  let [userExists, setUserExists] = useState(false)

  let [errorMessage, setErrorMessage] = useState("")

  async function loginPressed(event) {
    event.preventDefault();
    const serializedBody = JSON.stringify({ name: username, pass: password, mail: email, type: "employee" });
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: serializedBody
    };
    fetch("http://atc-2024-valve-anti-cheat-be-linux-web-app.azurewebsites.net/newuser/", fetchOptions).then(
      response => response.json()).then(
        data => {
          console.log(data);
          if (data) {
            goSkills();
          }
          else {
            setUserExists(true);
          }
        }
      );
  }

  useEffect(() => {
    checkValids();
  }, [validUser])
  useEffect(() => {
    checkValids();
  }, [validPass])
  useEffect(() => {
    checkValids();
  }, [validMail])

  async function handleUserChange(e) {
    setValidUser(false);
    setUsername(e.target.value);
    let re = /^[a-zA-Z0-9._-]{5,}$/;
    if (re.test(e.target.value)) {
      setValidUser(true)
    }
  }

  async function handlePassChange(e) {
    setPassword(e.target.value);
    setValidPass(false);
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (re.test(e.target.value)) {
      setValidPass(true);
    }
  }

  async function handleEmailChange(e) {
    setValidMail(false);
    setEmail(e.target.value);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e.target.value)) {
      setValidMail(true);
    }
  }

  async function checkValids() {
    if (validUser && validMail && validPass) {
      setErrorMessage('');
      return;
    }
    if (!validMail) {
      setErrorMessage("Invalid Email. A valid email usually looks like this: example@domain.tld");
    }
    if (!validPass) {
      setErrorMessage("Password must be longer than 6 characters and contain at least 1 number and 1 special character.");
    }
    if (!validUser) {
      setErrorMessage("Username must be longer than 5 characters and have no spaces.");
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='sign-up'>
        <form className='sign-up-form'>
          <h1>Sign Up as an Employee for ORGANIZATION_NAME</h1>
          <label>Name:</label>
          <input type="text" value={username} onChange={handleUserChange} placeholder="Enter your name" />
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePassChange} placeholder="Enter your password" />
          <label>E-mail Address:</label>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
          {errorMessage && <span className='invalid'>{errorMessage}</span>}
          {!errorMessage && !userExists && <span className='valid'>All good!</span>}
          {userExists && <span className='invalid'>A user already exists with this username/email.</span>}
          {errorMessage ? <button className='disabled_button' disabled>Join</button> : <button onClick={loginPressed}>Join</button>}
        </form>
        <div className='hide-dots-mobile'>
          <span className='sue-dot3'></span>
          <img src={sueImage} alt="Organization Image"></img>
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