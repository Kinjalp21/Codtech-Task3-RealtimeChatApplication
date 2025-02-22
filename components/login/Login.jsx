import { useState } from "react"
import "./login.css"

const Login = ({setUser}) => {

    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar  = (e) => {
        if (e.target.files[0]) {
            setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0]),
            });
        }
    }

    const handleLogin =  (e) => {
        e.preventDefault();
        if (username.trim()) {
            setUser(true); 
        } else {
            alert("Please enter a username or email");
        }
    };

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" name="password" />
                    <button>Login</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2>Create an account </h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "/avatar.png"} alt="" />
                        Upload an image</label>
                    <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>   
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login