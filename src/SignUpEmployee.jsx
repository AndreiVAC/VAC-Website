import React from 'react'
import { useEffect, useState } from "react";


function SignUpEmployee() {
  let [username, setUsername] = useState("Stranger")
  async function loginPressed(event) {
    event.preventDefault();
    const serializedBody = JSON.stringify({name : username,
      name2 : username});
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: serializedBody
    };
    fetch("/api/newuser/", fetchOptions);
  }
  
  //bidirectional binding react
  function handleSetUsername(e)
  {
    setUsername(e.target.value)
  }

  return (
    <div className="sue" >
      <div style={{height: '100%', position: 'relative', background: 'white' }}>
        <div className = "sue-box" style ={{ height: '100%', width: '80%'}}>
          <div className= "sue-text"style={{ left: 0, top: 0, padding: '5%', position: 'relative' }}>Name: </div>
          <input style = {{position: 'relative'}}type="text" value={username} onChange={handleSetUsername} name="uname"></input>
        </div>
          <div style={{ width: 229.11, height: 45, left: 164, top: 522, position: 'absolute' }}>
            <div style={{ width: 229.11, height: 45, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 10 }} />
            <div style={{ width: 71.14, left: 81.60, top: 11, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}><button onClick={loginPressed}>Submit</button></div>
        </div>
        <div style={{ width: 1264, height: 40, left: 88, top: 64, position: 'absolute', opacity: 0.90 }}>
          <div style={{ width: 550.07, height: 29, left: 713.93, top: 6, position: 'absolute' }}>
            <div style={{ width: 150.02, height: 29, paddingLeft: 41, paddingRight: 41, paddingTop: 5, paddingBottom: 5, left: 200.03, top: 0, position: 'absolute', background: 'black', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Log In</div>
            </div>
            <div style={{ width: 150.02, height: 29, paddingLeft: 41, paddingRight: 41, paddingTop: 5, paddingBottom: 5, left: 400.05, top: 0, position: 'absolute', background: 'black', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Profile</div>
            </div>
            <div style={{ width: 150.02, height: 29, paddingLeft: 41, paddingRight: 41, paddingTop: 5, paddingBottom: 5, left: 0, top: 0, position: 'absolute', background: 'black', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>Sign Up</div>
            </div>
          </div>
          <div style={{ width: 42.56, height: 40, left: 0, top: 0, position: 'absolute', border: '2px black solid' }}></div>
          <div style={{ width: 142, left: 50, top: 6, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word' }}>TEAM FINDER</div>
        </div>
        <div style={{ width: 856.03, height: 629.56, left: -98.74, top: 618.59, position: 'absolute', transform: 'rotate(36.83deg)', transformOrigin: '0 0', background: '#59C1C2', borderRadius: 9999, backdropFilter: 'blur(400px)' }} />
        <img style={{ width: 696, height: 468, left: 656, top: 207, position: 'absolute', opacity: 0.96, borderRadius: 10 }} src="https://via.placeholder.com/696x468" />
      </div>
    </div>
  )
}

export default SignUpEmployee