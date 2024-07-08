import React, { useEffect, useState } from "react";
import Modal from "./Modal";

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

function Tvshows() {
  const [movies, setMovie] = useState([]);

  // writing the custom hooks for conditionally rendering the modal
  // on button clicks
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Keep track of the selected movie in the state.
  const openModalForMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  //     openModalForMovie is a JavaScript function that you've defined with an arrow function syntax. It takes a single parameter, which is named movie.

  // Inside the function body, setSelectedMovie(movie) is called. This line of code sets the state variable selectedMovie to the movie that is passed as an argument to the function.

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
        console.log(setMovie);
        // Update the 'movies' state with the results from the API
      });
  }, []);

  return (
    <>
      <div className="Main">
        {movies.map((Tvshows) => (
          <div className="Movie_title" key={Tvshows.id}>
            <div className="img">
              <img src={Api_Img + Tvshows.poster_path} alt="" />
            </div>
            <div className="moviecardinfo">
              <h1>{Tvshows.name}</h1>

              <h1>Ratings : {Tvshows.vote_average}</h1>
              <h1>popularity :{Tvshows.popularity}</h1>

              {/*Here we are setting the openModal status to true by running a function when
           the button is clickde*/}
              <button onClick={() => openModalForMovie(Tvshows)}>
                More...
              </button>
            </div>

            {/* HERE WE ARE WRITING THE CONDITION FOR  */}
            {selectedMovie && (
              <Modal closeModal={closeModal} {...selectedMovie} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Tvshows;
