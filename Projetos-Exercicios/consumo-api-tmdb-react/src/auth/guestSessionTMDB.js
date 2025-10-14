import dotenv from 'dotenv';
dotenv.config();


export function getGuestAuthSession() {
  const REACT_APP_TOKEN_BEARER = process.env.REACT_APP_TOKEN_BEARER;
  const authenticationUrl = 'https://api.themoviedb.org/3/authentication/guest_session/new';


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: REACT_APP_TOKEN_BEARER
    }
  };

  return fetch(authenticationUrl, options)
    .then(res => {
      if(! res.ok) {
        throw new Error("Dont");
      }
      return res.json();
    })
    
    
  }
console.log(await getGuestAuthSession())