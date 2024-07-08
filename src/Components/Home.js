import React from "react";
import Movie_2 from "../Videos/Movie_2.mp4";
// import Hovereffect from "./Hovereffect";
// import Finalcard from "./Finalcard";
// import Hovereffect from './Components/Hovereffect';
import Hovereffect from "./Hovereffect";
const Home = () => {
  return (
    <>
    
    <div className="hero-videe-section">
    <div className="tittle-section">
        <img src="https://pluspng.com/img-png/saw-hd-png-4-800.png" alt=""  />
        <div className="tittle-section-buttons">
          <button>Play now</button>
          <button style={{background:"white", color:"black",fontWeight:"700"}}>More info</button>
        </div>
        <p style={{ width: "", color: "white" }}>
          A mild-mannered café owner becomes a local hero through an act of
          violence, <br></br>
        </p>
      </div>

      {/* child section of  home_component_section*/}
      <div className="video_section">
        <video id="video" controls autoPlay loop>
          <source src={Movie_2} />
        </video>
        {/* <img src="https://images.hdqwalls.com/wallpapers/avengers-infinity-war-2018-4k-poster-06.jpg" alt="" style={{objectFit:"cover",height:"100vh"}}/> */}
      </div>
        
    </div>
    <div className='mediascroller'>
      <Hovereffect></Hovereffect>
    </div>

   
      
    </>
  );
};

export default Home;
