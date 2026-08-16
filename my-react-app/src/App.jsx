import { useState } from 'react'
import {Login} from './Login'
import './Login.css'
import './App.css'

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const[username,setUsername]=useState("");
  return (
    <div className="App">
      {isLoggedIn?null:<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername}></Login>}
    </div>
  )
}

export default App
