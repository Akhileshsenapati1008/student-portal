import { useState } from 'react'
import {Login} from './Login'
import {Profile} from './Profile'
import {Dashboard} from './Dashboard'
import './Login.css'
import './Profile.css'
import './App.css'

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const[username,setUsername]=useState("");
  return (
    <div className="App">
      {isLoggedIn?null:<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername}></Login>}
      {isLoggedIn?<Profile></Profile>:null}
      {isLoggedIn?<Dashboard></Dashboard>:null}
    </div>
  )
}

export default App
