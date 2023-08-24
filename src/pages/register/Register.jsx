import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Username"/>
                <label>E-Mail</label>
                <input className="registerInput" type="email" placeholder="example@gmail.com"/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Password"/>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link style={{textDecoration:"none", color:"inherit"}} to="/login">Login</Link></button>
        </div>
    )
}