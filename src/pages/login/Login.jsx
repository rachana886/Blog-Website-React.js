import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return(
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>E-Mail</label>
                <input className="loginInput" type="email" placeholder="example@gmail.com"/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Password"/>
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link style={{textDecoration:"none", color:"inherit"}} to="/register">Register</Link></button>
        </div>
    )
}