import { useEffect, useState } from "react";
import SignUpEmployee from "./SignUpEmployee";

function App() {

  const [backendData, setBackendData] = useState([])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
      {backendData? ( backendData
  ) : (console.log("no backend data."))}
      <h1></h1>
      <SignUpEmployee></SignUpEmployee>
    </>
  );
}

export default App
