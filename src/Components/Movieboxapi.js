import React,{useState,useEffect} from 'react'
import Moviebox from './Moviebox'

// Define the URL of the API endpoint for popular movies...
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=db384d67c3894bdafbba923ef945146e"
// here we are storing the api url in a const variable const API_URL


// Define a functional component called Movieboxapi
const Movieboxapi = () => {
  // here we are declaring our custom statevariable to setthe data and to use the display the data

    const [movies,setMovie]= useState([])

  // Define an effect that runs when the component mounts
    useEffect(()=>{

       // Use the fetch API to make a GET request to the specified API_URL
       fetch(API_URL)

       // Parse the response as JSON
       .then((res)=>res.json())


       .then(data=>{
        // Log the data from the API response
        console.log(data);

        setMovie(data.results)
        // Update the 'movies' state with the results from the API
       })
       
    },[])// The empty array [] means this effect runs only once after the initial render



  return (
     // Return the JSX (React elements) that will be rendered by this component
    <div>
       {/* // Map through the 'movies' array and render a 'Moviebox' component for each movie */}

       {/* // Provide a 'key' prop to help React efficiently update and track these components */}

      

      {/* {movies.map((movieReq,index)=><Moviebox key={movieReq.id} {...movieReq}></Moviebox>)} */}
    </div>
  )
}

export default Movieboxapi
