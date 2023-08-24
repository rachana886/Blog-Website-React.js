import "./write.css"

export default function Write() {
    return(
        <div className="write">
            <img className="writeImg" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL3YxMDg5LWJnLTA1Yy14LmpwZw.jpg?s=8ff8Kib4y6X8bwJk6yDOjAbRBGPw15e074p8b1zjU2s" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                     <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display: "none"}}/>
                    <input className="writeInput" type="text" placeholder="Title" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" className="writeInput writeText" placeholder="Tell your story!"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}