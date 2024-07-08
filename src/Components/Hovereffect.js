import React from "react";
// import addtobtn from "../Buttons/addtobtn.svg"
import addtobtn1 from "../Buttons/addtobtn.svg";
import thumbsup1 from "../Buttons/thumbsup1.svg";
import { useEffect, useState } from "react";




// Define constants for the API image URL and API URL:
const Api_Img = `https://image.tmdb.org/t/p/w500/`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjM4NGQ2N2MzODk0YmRhZmJiYTkyM2VmOTQ1MTQ2ZSIsInN1YiI6IjY1MmFkZmM5MGNiMzM1MTZmZDQ5OTMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14v8YPD6Lm9_n1beShsDrPDCHOTRNq78njzWRB6AJnk",
  },
};


const Hovereffect = () => {
  const [movies, setMovie] = useState([]);

  const [animedata, setData] = useState([]);

  // const getdata = async () => {
    // const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=1");
    // const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=25");
    // const resdata = await response.json();
    // console.log(resdata.data);
    // console.log(resdata.data[0].images.jpg.small_image_url);
    // selected one particular image from the api data
    // setData(...resdata.data);
    // setData(resdata.data);
    // setData(resdata.data[0].images.jpg.small_image_url);
  // };

  // to call the  async function
  // useEffect(() => {
  //   getdata();
  // }, []);

  // the movie page

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((res) => res.json())
      .then((data) => {
        // Log the data from the API response
        // console.log(data);

        setMovie(data.results);
        console.log(data.results)
        // Update the 'movies' state with the results from the API
      });
  }, []);

  return (
    <>
         
    <div className="scroll-container">
    <h1>The movie list</h1>
      <div className="item-grid">
     
      {movies.map((Tvshows) => {
        return (
          
          
          <div className="hoverscrollablecontainer_secondary" key={Tvshows.id}>
            <div className="hover_card_parent">
              <div className="hover_card_parent">
                <div className="hover_card_parent-child">
                  <div className="functional_buttons_display_flex">
                    <img src={addtobtn1} alt="" height="36px" />
                    <img src={thumbsup1} alt="" height="36px" />
                    <img src={addtobtn1} alt="" height="36px" />
                  </div>

                  <div className="drop_down_button">
                    <select id="cars">
                      <option value="volvo">Lang</option>
                      <option value="saab">English</option>
                      <option value="opel">Tamil</option>
                      <option value="audi">Hindi</option>
                    </select>
                  </div>
                </div>
                <div className="hover_card_parent-child " style={{width:"100%" ,overflow:"auto"}}>
                  <h4 style={{ color: "green", paddingLeft: "10px" }}>
                    {Tvshows.name}
                  </h4> 
                  <span style={{ color: "white" }}>{
 }</span>
                  {/* <span style={{ color: "white" }}>{item.genres[0].name}</span> */}
                  <span style={{ color: "white" }}>HD))</span>
               
                </div>
              </div>

            
              <div className="hover_card_parent" key={Tvshows.id}>
                <img src={Api_Img + Tvshows.poster_path } alt="" />
              </div>
            </div>
          </div>
        );
      })}
      
      </div>
    </div>
  


    
    </>
  );
};

export default Hovereffect;
