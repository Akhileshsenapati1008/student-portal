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
  const[CurrentPage,setCurrentPage]=useState("dashboard");
  return (
    <div className="App">
      {isLoggedIn?null:<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername}></Login>}
      {(isLoggedIn&&CurrentPage==="profile")?<Profile username={username} setUsername={setUsername}></Profile>:null}
      {(isLoggedIn&&CurrentPage==="dashboard")?<Dashboard></Dashboard>:null}
      {(isLoggedIn&&CurrentPage==="settings")?<Settings></Settings>:null}
    </div>
  )
}

export default App
