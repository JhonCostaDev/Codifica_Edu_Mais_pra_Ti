import dotenv from 'dotenv';
dotenv.config();
   
const token = process.env.REACT_APP_TOKEN_BEARER;
//console.log(process.env.a)

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: token
  }
};

const url = 'https://api.themoviedb.org/3/movie/25'

fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));