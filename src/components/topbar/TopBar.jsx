import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = false;
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-github"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/">Home</Link></li>
                    <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/">About</Link></li>
                    <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/">Contact</Link></li>
                    <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/write">Write</Link></li>
                    <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/">{user && "Logout"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://i.pinimg.com/1200x/27/82/a3/2782a3c976c5c378e02822c144d51e92.jpg" alt="personal icon"/>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/login">Login</Link></li>
                            <li className="topListItem"><Link style={{textDecoration:"none", color:"inherit"}} to="/register">Register</Link></li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}