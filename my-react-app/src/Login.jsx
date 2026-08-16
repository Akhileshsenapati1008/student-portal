import { useState } from 'react'
const mapUserNameToPassword
={
    "ram":"01",
    "krishna":"02",
    "vaman":"03",
    "varaha":"04",
    "budh":"05",
    "parshuram":"06",
    "matshya":"07",
    "kurma":"08",
    "narsimha":"09",
}
export function Login({ isLoggedIn, setIsLoggedIn,username, setUsername }) {
    const [incorrectLogin, setIncorrectLogin] = useState(false);
const submitHandler = (event)=>{
event.preventDefault();
const data= new FormData(event.target);
const claimUsername=data.get("username");
const claimPassword=data.get("password");
if(mapUserNameToPassword[claimUsername]&&mapUserNameToPassword[claimUsername]===claimPassword){
setIncorrectLogin(false);
setUsername(claimUsername);
setIsLoggedIn(true);
    }else{
        setIncorrectLogin(true);
    }
}
return (
    <div id="outerLoginDiv">
        <h1>Student Login</h1>
        <form onSubmit={submitHandler}>
            <label id="usernameLabel">username</label>
            <input name="username" id="usernameInput" placeholder="Enter your username" required ></input>
            <label id="passwordLabel">Password</label>
            <input name="password" id="passwordInput" type="password" placeholder="Enter your password" required ></input>
            <button id="loginButton" type="submit">Login</button>
            <a href="/forgot-password">Forgot Password?</a>
            {incorrectLogin?<p id="incorrectLogin" style="color:red">Incorrect username or password</p>:null}
        </form>
    </div>
)
}