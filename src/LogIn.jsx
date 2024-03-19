import React from 'react'
import Header from './Header.jsx';
import { useEffect, useState } from "react";
import loginImage from './assets/image-login.png';
import { useNavigate } from "react-router-dom";

//8:54 - 9:38

function LogIn() {
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [wrongCredentials, setWrongCredentials] = useState(false)
    const navigate = useNavigate();
    const goSkills = () => {
        navigate('/skills');
    }
    const goHome = () => {
        navigate('/');
    }
    function handlePassChange(e) {
        setPassword(e.target.value);
      }
    
      function handleEmailChange(e) {
        setEmail(e.target.value);
      }
    async function loginPressed(event) {
        event.preventDefault();
        const serializedBody = JSON.stringify({pass: password, mail: email});
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: serializedBody
        };
        fetch("http://atc-2024-valve-anti-cheat-be-linux-web-app.azurewebsites.net/login", fetchOptions).then(
            response => response.json()
        ).then(
            data =>{
                console.log(data);
                if (data){
                    goSkills();
                }
                else{
                    setWrongCredentials(true)
                }
            }
        )
      }
    
    return (
        <div>
            <Header></Header>
            <div class="sign-up">
                <div class="hide-dots-mobile">
                    <img src={loginImage} alt="img" class="image"></img>
                    <span class="sua-dot2"></span>
                    <span class="sua-dot5"></span>
                    <span class="sua-dot1"></span>
                </div>
                <form class="sign-up-form">
                    <h1>Log into your Team Finder account</h1>
                    <label for="email">Email:</label>
                    <input type="email" value = {email} onChange={handleEmailChange} id="name" title="enter your email" placeholder="Enter your email." />
                    <label for="password">Password:</label>
                    <input type="password" id="password" value = {password}  onChange ={handlePassChange} title="enter your password" placeholder="Enter your password" />
                    <button onClick={loginPressed}>Log In</button>
                    {wrongCredentials && <span className='invalid'>Authentication failed. Please ensure your email and password are correct.</span>}
                </form>
            </div>
            <div className='hide-dots-mobile'>
                <span class="sua-dot3"></span>
                <span class="sua-dot6"></span>
            </div>
            <span class="dot4"></span>

        </div>
    )
}

export default LogIn