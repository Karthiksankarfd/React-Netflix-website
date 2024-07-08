// Import the necessary modules:
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

// Define constants for the API image URL and API URL:
const Api_Img = `https://image.tmdb.org/t/p/w500/`;

// Define the URL of the API endpoint for popular movies...
// here we are storing the api url in a const variable const API_URL
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=db384d67c3894bdafbba923ef945146e";

// Create the functional component Mddalmaincomponent:
const Mddalmaincomponent = () => {
  // here we are declaring our custom statevariable to setthe data and to use the display the data
  // Set up state variables for movies and selectedMovie:
  const [movies, setMovie] = useState([]);

  // writing the custom hooks for conditionally rendering the modal
  // on button clicks
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Define an effect using useEffect to fetch movie data from an API when the component mounts:
  useEffect(() => {
    // Use the fetch API to make a GET request to the specified API_URL
    fetch(API_URL)
      // Parse the response as JSON
      .then((res) => res.json())

      .then((data) => {
        // Log the data from the API response
        console.log(data);

        setMovie(data.results);
        // Update the 'movies' state with the results from the API
      });
  }, []); // The empty array [] means this effect runs only once after the initial render

  // const [openModal, setModal] =  useState(false)

  // Keep track of the selected movie in the state.
  const openModalForMovie = (movie) => {
    setSelectedMovie(movie);
  };

  //     openModalForMovie is a JavaScript function that you've defined with an arrow function syntax. It takes a single parameter, which is named movie.

  // Inside the function body, setSelectedMovie(movie) is called. This line of code sets the state variable selectedMovie to the movie that is passed as an argument to the function.

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <div className="Main">
        {movies.map((movieReq) => (
          <div className="Movie_title" key={movieReq.id}>
            <div className="img">
              <img src={Api_Img + movieReq.poster_path} alt="" />
            </div>
            <div className="moviecardinfo">
              <h1>{movieReq.title}</h1>
              <h1 style={{ color: "green" }}>
                {" "}
                Ratings : {movieReq.vote_average}
              </h1>
              <h1>Popularity : {movieReq.popularity}</h1>

              {/*Here we are setting the openModal status to true by running a function when
          the button is clickde*/}
              <button onClick={() => openModalForMovie(movieReq)}>
                More...
              </button>
            </div>

            {/* HERE WE ARE WRITING THE CONDITION FOR rendering the modal for particular movie  */}
            {selectedMovie && (
              <Modal closeModal={closeModal} {...selectedMovie} />
            )}
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Mddalmaincomponent;
