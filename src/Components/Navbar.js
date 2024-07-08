import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import bell from "../Images/bell.png";
import user from "../Images/user.png";
import Tvshows from "./Tvshows";
import Moviepage from "./Movielist";
import Newandpopular from "./Newandpopular";
import Mylist from "./Mylist";
import Browsebylanguage from "./Browsebylanguage";
import Signinpage from "./Signinpage";
import Profilepage from "./Profilepage";
import Notification from "./Notification";
import Moviepagefinal from "./Moviepage";
import Mddalmaincomponent from "./Mddalmaincomponent";
const Navbar = () => {
  return (
    <>
      
        <div className="navbar_width_full">
          {/* Logo section */}
          <div className="logo">
            <img id="tab_and_laptop_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt=""
            />

            <img id="mobile_logo"
              src="https://www.pngall.com/wp-content/uploads/13/Netflix-Logo-PNG.png"
              alt=""
            />
            
          </div>

          <div className="Option_button mobile_view">
                   <select id="Browse">
                      <option value="Tv Shows">Tv Shows</option>
                      <option value="Movies">Movies</option>
                      <option value="Categories">Categories</option>
                      {/* <option value="audi">Audi</option> */}
                    </select>
          </div>

          {/* Navlinks section */}
          <div className="navlinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                {" "}
                <Link to="/tvshows">Tv shows</Link>
              </li>

              <li>
                {" "}
                <Link to="/moviespage">Movies</Link>
              </li>

              <li>
                {" "}
                <Link to="/newsandpopular">New& popular</Link>
              </li>

              <li>
                {" "}
                <Link to="/mylist">Mylist </Link>
              </li>

              <li>
                {" "}
                <Link to="/browsebylanguage">Browse by languge</Link>
              </li>
            </ul>
          </div>

          {/* Search bar section */}
          <div className="searchsection">
            <input type="text" placeholder="Movies, Series, Dramas..." />
          </div>

          {/* Profile section */}


{/* division for all icons section */}
          <div className="three_icons">
          <div className="profile icons">
            {" "}
            <Link to="/profile">
              
              <img src={user} alt="" />
            </Link>
          </div>

          
          {/* Bell icon section */}
          <div className="bell icons">
            {" "}
            <Link to="/notifications">
              <img src={bell} alt="" />
            </Link>
          </div>

           {/* Sign In/Sign Out section */}
           <div className="sign-in-out  icons">
            <Link to="/signinpage"><img src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt=""/></Link>
          </div>


          </div>
      


         
        </div>
     

      {/* division for routes */}

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/tvshows" element={ <Tvshows></Tvshows>} />
        <Route path="/moviespage" element={ <Mddalmaincomponent></Mddalmaincomponent>} />
        <Route path="/newsandpopular" element={<Newandpopular></Newandpopular>} />
        <Route path="/mylist" element={<Mylist></Mylist>} />
        <Route path="/browsebylanguage" element={<Browsebylanguage></Browsebylanguage>} />
        <Route path="/signinpage" element={<Signinpage></Signinpage>} />
        <Route path="/profile" element={<Profilepage></Profilepage>} />
        <Route path="/notifications" element={<Notification></Notification>} />


      </Routes>
    </>
  );
};

export default Navbar;
