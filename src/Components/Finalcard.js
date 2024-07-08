import React from "react";
import addtobtn1 from "../Buttons/addtobtn.svg";
import thumbsup1 from "../Buttons/thumbsup1.svg";
import { useEffect, useState } from "react";

const Hovereffect = () => {
  const [animedata, setData] = useState([]);

  const getdata = async () => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=15");
    const resdata = await response.json();
    setData(resdata.data);
  };

  useEffect(() => {
    getdata();
  }, []);
 
  return (
    <div className="scrollable-container">
      {animedata.map((item,i)=>
      {
        return(
            <div className="hover-card" key={i}>
             <div className="hoverscrollablecontainer_secondary" key={i}>
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
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="hover_card_parent-child">
                  <h4 style={{ color: "green", paddingLeft: "10px" }}>
                    {item.score}
                  </h4>
                  <span style={{ color: "white" }}>U/A 16+</span>
                  <span style={{ color: "white" }}>{item.genres[0].name}</span>
                  <span style={{ color: "white" }}>HD))</span>
                </div>
              </div>
              <div className="hover_card_parent" key={i}>
                <img src={item.images.webp.large_image_url} alt="" />
              </div>
            </div>
          </div>
        </div>

        )
        
      })}
    </div>
  );
};

export default Hovereffect;
