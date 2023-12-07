import "../assets/style/landing.scss"
import title from "../assets/illustrations/TITRE.png"
import play from "../assets/illustrations/JOUERSANSTEXTEEEE.png"
import man from "../assets/illustrations/bonhomme_noel_content.png"

const Body = () => {
    return (
        <div className="body">
            <div className="title_container">
                <img src={title}/>
            </div>
            <div className="play_container">
                <img src={play}/>
            </div>
            <div className="img_man">
                <img src={man}/>
            </div>
        </div>
    );
};

export default Body;