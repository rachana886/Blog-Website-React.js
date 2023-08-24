import "./singlePost.css"

export default function SinglePost() {
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://e0.pxfuel.com/wallpapers/816/644/desktop-wallpaper-3d-landscape-brown-landscape.jpg" alt="" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Rachana</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quisquam possimus beatae praesentium reprehenderit officia omnis dolorum quaerat nam laboriosam cupiditate, obcaecati natus eveniet esse adipisci iure quod odit animi cumque voluptates sunt. Culpa sunt et hic repudiandae expedita nobis modi praesentium recusandae, iste eius eum deserunt facilis dolorem officiis dolore. Quisquam dicta, labore, saepe dolorem quidem sequi fugit nulla quibusdam atque dolorum nisi quia et voluptas quam eaque eligendi culpa odio sed ipsum. Tenetur ratione, ipsam nostrum vitae quia voluptatum assumenda velit atque obcaecati veniam rerum! Ex necessitatibus animi, quos asperiores quisquam dolorem tenetur. Quibusdam dicta facere ipsam suscipit!</p>
            </div>
        </div>
    )
}