import "./post.css"

export default function Post() {
    return(
        <div className="post">
            <img className="postImg" src="https://e0.pxfuel.com/wallpapers/974/660/desktop-wallpaper-brown-aesthetic-laptop-page-2-soft-brown-aesthetic.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, provident sequi! 
            Architecto ut odio vero asperiores deserunt eveniet nihil labore aut, ipsum nemo dolorum tempora aspernatur eum 
            ad natus sapiente.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, provident sequi! 
            Architecto ut odio vero asperiores deserunt eveniet nihil labore aut, ipsum nemo dolorum tempora aspernatur eum 
            ad natus sapiente.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, provident sequi! 
            Architecto ut odio vero asperiores deserunt eveniet nihil labore aut, ipsum nemo dolorum tempora aspernatur eum 
            ad natus sapiente.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, provident sequi! 
            Architecto ut odio vero asperiores deserunt eveniet nihil labore aut, ipsum nemo dolorum tempora aspernatur eum 
            ad natus sapiente.</p>
        </div>
    )
}