import React from 'react'
const Api_Img = "https://image.tmdb.org/t/p/w500/"


const Moviebox = ({ title,poster_path,overview,original_title
    
}) => {
  return (
    <div>
     <img src={ Api_Img+poster_path} alt='loading'/>
     <h1>{title}</h1>
     <p>{overview}</p>
      
    </div>
  )
}

export default Moviebox;
