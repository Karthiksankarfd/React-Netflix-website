

import axios from 'axios';


export default axios.create({
// this is the base url for the api 
baseURL: 'https://api.themoviedb.org/3',

headers: {

Accept: "application/json"

},

params: {
// here we have to use our own api
api_key: 'db384d67c3894bdafbba923ef945146e'

}

})