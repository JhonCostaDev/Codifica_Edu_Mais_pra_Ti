import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const TMDB_APIKEY = process.env.TMDB_APIKEY;
const ACCOUNT_ID = '1234'//process.env.REACT_APP_ACCOUNT_ID;
const REACT_APP_TOKEN_BEARER = process.env.REACT_APP_TOKEN_BEARER;
const TMDB_URL_BASE = `https://api.themoviedb.org/3/account/${ACCOUNT_ID}/favorite/movies`;



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: REACT_APP_TOKEN_BEARER
  }
};

fetch('https://api.themoviedb.org/3/configuration', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

// const params = {
//     language: 'en-US',
//     page: 1,
//     sort_by: 'created_at.asc'
// };

// const headers = {
//     accept: 'application/json',
//     Authorization: REACT_APP_TOKEN_BEARER
// };

// axios.get(TMDB_URL_BASE, {params, headers})
//     .then(response => {
//         console.log("Status: ", response.status);
//         console.log("Data", response.data.results);
//     })
//     .catch(error => {
//         console.error("Error to fetch data: ", error);
//     })


fetch('https://api.themoviedb.org/3/configuration', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));