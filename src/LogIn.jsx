import React from 'react'
import Header from './Header.jsx';
import loginImage from './assets/image-login.png';

//8:54 - 9:38

function LogIn() {
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
                    <label for="email">Username or Email:</label>
                    <input type="email" id="name" title="enter your name" placeholder="Enter your name / email." />
                    <label for="password">Password:</label>
                    <input type="password" id="password" title="enter your password" placeholder="Enter your password" />
                    <button>Log In</button>
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