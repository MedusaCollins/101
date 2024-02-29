import { useEffect, useState } from "react";
import Login from "./components/Login";
import axios from "axios";
import Chat from "./components/Chat";



function App() {
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  
  async function join(){
    try {
      await axios.post("http://localhost:3001/joinChat", {username: username});
      setIsJoined(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
      {isJoined ? 
        <Chat {...{username}}/> :
        <Login {...{username, setUsername, join}}/>
      }
    </div>
  );
}

export default App;
