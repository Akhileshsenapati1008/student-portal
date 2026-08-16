export function Settings({isLoggedIn, setIsLoggedIn, username, setUsername, currentPage, setCurrentPage}){
    return(
        <div className="settings">
            <h1>Welcome to your settings</h1>
            <p>Here you can manage your account preferences.</p>
            <p>Unfortunately Locked for all Students</p>
            <button onClick={()=>{
                setIsLoggedIn(false);
                setUsername("");
                setCurrentPage("login");
            }}>Logout</button>
            <button onClick={()=>{
                setCurrentPage("settings");
            }}>Settings</button>
            <button onClick={()=>{
                setCurrentPage("dashboard");
            }}>dashboard</button>
        </div>
    )
}