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
  const[currentPage,setCurrentPage]=useState("dashboard");
  return (
    <div className="App">
      {isLoggedIn?null:<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername}></Login>}
      {(isLoggedIn&&currentPage==="profile")?<Profile username={username} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} currentPage={currentPage} setCurrentPage={setCurrentPage}></Profile>:null}
      {(isLoggedIn&&currentPage==="dashboard")?<Dashboard></Dashboard>:null}
      {(isLoggedIn&&currentPage==="settings")?<Settings></Settings>:null}
    </div>
  )
}

export default App
