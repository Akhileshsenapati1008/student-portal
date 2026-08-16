const mapUsernameToDashboard = (username) => {
    const dashboards={
        "ram": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[A,B,C,A],attendance:[90,80,70,95]},
        "krishna": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[B,A,B,C],attendance:[85,90,75,80]},
        "vaman": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[C,B,A,B],attendance:[70,85,90,75]},
        "varaha": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[A,C,B,A],attendance:[95,70,80,90]},
        "budh": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[B,A,C,B],attendance:[80,95,70,85]},
        "parshuram": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[C,B,A,C],attendance:[75,80,95,70]},
        "matshya": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[A,B,C,A],attendance:[90,85,80,95]},
        "kurma": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[B,C,A,B],attendance:[85,70,90,80]},
        "narsimha": { coursesTaken:[SSD,DSAPS,OS,MCS],grades:[C,A,B,C],attendance:[70,95,85,75]},
    }
    return dashboards[username];
}
export function Dashboard({username, isLoggedIn, setIsLoggedIn, setUsername, currentPage, setCurrentPage}){
    return(
        <div className="dashboard">
            <h1>Welcome to your dashboard</h1>
            <p>Username: {username}</p>
            <p>Courses Taken: {mapUsernameToDashboard(username).coursesTaken.join(", ")}</p>
            <p>Grades: {mapUsernameToDashboard(username).grades.join(", ")}</p>
            <p>Attendance: {mapUsernameToDashboard(username).attendance.join(", ")}</p>
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