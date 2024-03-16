import React from 'react'
import { useEffect, useState } from "react";
import './index.css';

function Users() {

    const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
    {backendData ? (<h1 className='sign-up-form'>{backendData}</h1>
      ) : (console.log("no backend data."))}
      <h1 ></h1>
    </>
  )
}

export default Users