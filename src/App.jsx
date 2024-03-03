import { useEffect, useState } from "react";
import Card from "./Card";

function App() {

  const [backendData, setBackendData] = useState([{}])

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
    {/*backendData.users.map((user, i) => (
        <p key = {i}>{user}</p>
    ))
    Randomly stops working, idk y, check browser inspect
    */}
      
      <h1>{backendData.users}</h1>
      <h1></h1>
      <Card></Card>
    </>
  );
}

export default App
