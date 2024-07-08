
import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      
      const url = 'https://api.themoviedb.org/3/movie/157336?api_key=db384d67c3894bdafbba923ef945146e';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'db384d67c3894bdafbba923ef945146e',
          'X-RapidAPI-Host': 'append_to_response=videos,images'
        
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
    // Your component JSX
    <></>
  );
};

export default YourComponent;
