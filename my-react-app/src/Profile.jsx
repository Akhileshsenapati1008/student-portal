import UseState from "react";
const mapUsernameToProfile = (username) => {
    const profiles = {
        "ram": { name: "Ram", age: 25, email: "ram@example.com" },
        "krishna": { name: "Krishna", age: 30, email: "krishna@example.com" },
        "vaman": { name: "Vaman", age: 28, email: "vaman@example.com" },
        "varaha": { name: "Varaha", age: 32, email: "varaha@example.com" },
        "budh": { name: "Budh", age: 27, email: "budh@example.com" },
        "parshuram": { name: "Parshuram", age: 29, email: "parshuram@example.com" },
        "matshya": { name: "Matshya", age: 31, email: "matshya@example.com" },
        "kurma": { name: "Kurma", age: 26, email: "kurma@example.com" },
        "narsimha": { name: "Narsimha", age: 33, email: "narshimha@example.com"}
    };
    return profiles[username] || null;
}
export function Profile({username, isLoggedIn, setIsLoggedIn, setUsername}){
return(
    <div className="profile">
        <h1>Welcome to your profile</h1>
        <p>name:{mapUsernameToProfile(username)?.name || "User"}</p>
        <p>age:{mapUsernameToProfile(username)?.age || "N/A"}</p>
        <p>email:{mapUsernameToProfile(username)?.email || "N/A"}</p>
    </div>
)
}