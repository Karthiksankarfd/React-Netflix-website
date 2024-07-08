// import React, { useState, useEffect } from 'react';

const Api_Img = 'https://image.tmdb.org/t/p/w500/';
// const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=db384d67c3894bdafbba923ef945146e&limit=2';

const Modal = ({ closeModal, name, poster_path, vote_average,overview,title
}) => {
  // const [moviesdata, setMoviesdata] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMoviesdata(data.results);
  //     });
  // }, []);

  return ( 
    <div className="modalbackground">

      <div className="modalcontainer">
        <div className="buttonsection">
          <button onClick={() => closeModal(false)}>X</button>
        </div>

        <div className="title">
          <h1 style={{ color: 'white' }}>{name}</h1>
          <h1 style={{ color: 'white' }}>{title}</h1>
        </div>

        <div className="modalimage">
          <img src={Api_Img + poster_path} alt="Loading..."  style={{height:"300px"}}/>
        </div>

        <div className="content">
          <h1>{}</h1>
          <p style={{ color: 'green' }}>Ratings : {vote_average}</p>
          <p style={{ color: 'white' }}>{overview}</p>
        </div>

        <div className="close_and_continue_btns">
          <button className="closebtn" onClick={() => closeModal(false)}>
            Close
          </button>
          {/* <button className="continuebtn">Continue</button> */}
        </div>
      </div>

      {/* <div className='modalcontainer'></div> */}
    </div>
  );
};

export default Modal;
