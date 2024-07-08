import React from "react";
import Footerforsigninpage from "./Footer";
// import Home from "./Homecom";
import { NavLink, Routes, Route } from "react-router-dom";

const SIgninpage = () => {
  // const
  return (
    <>
      {/* this for signin page */}
      <div className="background-image">
        <div className="background-image-layer"></div>

       

        {/* for input  */}
        <div className="main-container">
          <div className="signinpart">
            <div className="sign-transparent-1">
              {/* <div className="tittle">
              <h1 id="h1">sign in </h1>
            </div> */}

              <div className="inputdetails">
                <div className="tittle">
                  <h1 id="h1">Sign in </h1>
                </div>
                <label Name="Enter mail" />
                <input type="email" placeholder="Enter email" />
                <p id="showerror"></p>
              </div>

              <div className="inputdetails">
                <label Name="Enter mail" />
                <input type="password" placeholder="password" />
                <p id="showerror"></p>
              </div>

              <div className="inputdetails-button">
                <button id="btn">Sign in</button>
              </div>

              <div className="Check-box">
                <div className="Check-box-section">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div className="Check-box-section">
                  <span>Need help?</span>
                </div>
              </div>

              <div className="newuser-signup">
                <h4>New to Netflix ?</h4>
                <h4>
                  <a href="">Sign up now</a>
                </h4>
              </div>
              <div className="data-info">
                <p
                  style={{
                    fontSize: "12px",
                    color: "white",
                    textAlign: "start",
                  }}
                >
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. <a href="">Learn more.</a>
                </p>
              </div>
            </div>
            <div className="sign-transparent-2"></div>
            {/* <Link to="/home">Home</Link> */}
          </div>
        </div>
        {/* <Footerforsigninpage></Footerforsigninpage> */}
      </div>
    </>
  );
};

export default SIgninpage;

