import React from 'react';
import Header from './Header.jsx';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// 10:05 - 10:36


function copyToClipboard() {
    var copyText = document.getElementById("linkInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  } 

function SignedUp() {
    let [employeeURL, setEmployeeURL] = useState("https://team-finder.com/join-organization/kDFgkrDDxEn32ZXE343")
    const navigate = useNavigate();
    const goSkills = () => {
        navigate('/skills');
    }
    const goEmployee = () => {
        navigate('/join-organization');
    }
    return (
        <div>
            <Header></Header>
            <div className="hide-dots-mobile">
            <span class="dot1"></span>
            <span class="dot2"></span>
            <span class="sua-dot3"></span>
            <span class="sua-dot6"></span>
            <span class="sua-dot1"></span>
            </div>
            <span class="dot4"></span>
            <div className='sign-up'>
                <h1 className='link-text'>
                    <br></br>
                    Signed In Successfully.
                    <br></br>
                    Share the URL to invite your employees.
                </h1>
                <div className="sign-up-form">
                    <h1>URL: </h1>
                    <input onClick={copyToClipboard} type="text" id="linkInput" value={employeeURL}></input>
                    <button onClick={goSkills}>Go To Dashboard</button>
                    <button onClick={goEmployee}>Test Employee Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default SignedUp