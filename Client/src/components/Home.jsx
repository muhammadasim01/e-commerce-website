import { Navbar1 } from "./Navbar1";
import { Link } from "react-router-dom";
import video from "../videos/mobilevideo.mp4";

const Home = () => {
  return (
    <div className="text-light">
      <Navbar1 />
      <div
        className="container videoContainer"
        style={{ position: "relative", top: "75px" }}
      >
        <video className="container video" src={video} autoPlay muted loop />
        <div className="  homeContainer">
          <h1 className="homehead">access the world today</h1>
          <p className="hometext">Widest Choice and Best Offers Guaranteed</p>
          <Link to="/allmobiles">
            <button className=" homebtn btn btn-primary">shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
