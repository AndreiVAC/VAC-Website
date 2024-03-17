import React from 'react';
import Helmet from 'react-helmet';
import icon from './assets/icon.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    const goSignUp = () => {
        navigate('/sign-up');
    }
    const goLogIn = () =>{
        navigate('/log-in')
    }
    return (
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
        <header className="header">
            <button className="hidden-button"  onClick={goHome} >
                <div className='header-logo'>
                    <img src={icon} alt="Team Finder Logo" />
                    <span>TEAM FINDER</span>
                </div>
            </button>
            <div className="header-buttons">
                <button onClick={goSignUp}>Sign Up</button>
                <button onClick={goLogIn}>Log In</button>
            </div>
        </header>
        </>
    )
}

export default Header