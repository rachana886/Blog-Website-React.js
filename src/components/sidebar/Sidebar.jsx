import "./sidebar.css"

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/736x/05/1e/ac/051eacb145348b8581b4959bee064167.jpg" alt="profile picture" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora alias id quis facere? Tempora soluta porro cupiditate sunt debitis?</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-github"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}