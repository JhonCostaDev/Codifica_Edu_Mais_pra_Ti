//aqui conexao com api TMDB

import axios from 'axios';

const TMDB_APIKEY = process.env.TMDB_APIKEY;
const TMDB_URL_BASE = 'https://api.themoviedb.org/3';
const TMDB_URL_FAVORITE_MOVIES = 'account/22384146/favorite/movies?language=en-US&page=1&sort_by=created_at.asc';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODNkOTA4NmE3Y2JkM2I0OTkzNmZlYjc1MzVkMWZiNiIsIm5iZiI6MTc2MDQ0NTcyNS4zNjUsInN1YiI6IjY4ZWU0NTFkMGFmN2FiMDFmOTI4MmIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AXfLQbxn6GYYEAAI7vZ6PkoDFEmr2x_BclaSgmQjdFg'
  }
};

export const getPopularMovies = async() => {
    const response = await axios.get(`${TMDB_URL_BASE}/${TMDB_URL_FAVORITE_MOVIES}`, options)
}
