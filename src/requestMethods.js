import axios from 'axios';

const BASE_URL = 'https://shopr-server.vercel.app/api';
const isToken = JSON.parse(localStorage.getItem('persist:root'));
const TOKEN =
  isToken === null
    ? null
    : JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser?.accessToken;

console.log('request method page');

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
