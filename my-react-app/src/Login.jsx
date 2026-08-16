export function Login(){
return (
    <div id="outerLoginDiv">
        <h1>Student Login</h1>
        <form>
            <label id="usernameLabel">username</label>
            <input id="usernameInput" placeholder="Enter your username" required ></input>
            <label id="passwordLabel">Password</label>
            <input id="passwordInput" type="password" placeholder="Enter your password" required ></input>
            <button id="loginButton" type="submit">Login</button>
            <a href="/forgot-password">Forgot Password?</a>
        </form>
    </div>
)
}