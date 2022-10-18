import axios from 'axios';
export const baseURL = 'http://localhost:5000/api';
// export const  baseURL = "https://turbomultivendor.herokuapp.com/api"

export const Action = axios.create({
  baseURL: baseURL,
});
