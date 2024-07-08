// import React from 'react'
// import { useEffect,useState } from 'react'
// // import bootstrap from 'react-bootstrap';
// // import button from 'react-bootstrap';
// const Moviepage = () => {
//     const [Moviedata, setData] = useState([]);

//     const getdata = async () => {
//         // const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=1");
//         const response = await fetch("https://api.themoviedb.org/3/movie/11?api_key=db384d67c3894bdafbba923ef945146e");
//         const resdata = await response.json();
//         console.log(resdata);
//         // console.log(resdata.data[0].images.jpg.small_image_url);
//         // selected one particular image from the api data
//         // setData(...resdata.data);
//         setData(resdata);
//         // setData(resdata.data[0].images.jpg.small_image_url);
//       };

//         // to call the  async function
//   useEffect(() => {
//     getdata();
//   }, []);

// // first return function
//   return (
//     <> 
//     {Moviedata.map((item, i) => { return (
   
//    <div className='moviue' key={i}>
//    <img src={item.origin_country} alt='' />

//    </div>
  

  
//       );
//     })}
  
//   </>
//   )}

// export default Moviepage 


import React, { useEffect, useState } from 'react';

const Moviepage = () => {
  const [Moviedata, setData] = useState({});
//   const { column, comparison, value } = Moviedata;

  const getdata = async () => {
    const response = await fetch(" https://api.themoviedb.org/3/movie/550?api_key=db384d67c3894bdafbba923ef945146e");
    // const response = await fetch("  https://api.themoviedb.org/3/collection/collection_id/images?api_key=db384d67c3894bdafbba923ef945146e");
    
   
    const resdata = await response.json();
    console.log(resdata);
    setData(resdata);
    // console.log(Moviedata)
  };

  useEffect(() => {
    getdata();
    
  }, []);

  return (
    <div className='movie'>
      {/* Access properties of Moviedata directly */}
      {/* <img src={Moviedata.origin_country} alt='' /> */}
      {/* Add more properties here as needed */}
      
      
      {/* <p style={{color:"white"}}>{}</p> */}
      {/* <pre>{[Moviedata]}</pre> */}
    </div>
  );
};

export default Moviepage;
