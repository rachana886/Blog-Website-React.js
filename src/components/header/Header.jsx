import "./header.css";

export default function Header() {
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://static.vecteezy.com/system/resources/previews/011/561/871/original/aesthetic-abstract-modern-brown-background-illustration-perfect-for-wallpaper-backdrop-postcard-background-banner-vector.jpg" alt="sunset background image" />
        </div>
    )
}