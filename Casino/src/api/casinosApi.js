import axios from 'axios';

export const casinosApiAuth = axios.create({
  // baseURL: 'http://smol-plus.dev2.ies-gaming.com:8282',
  baseURL: 'http://localhost:8080',
  headers: {
    // Authorization: ` Bearer ${'token'}`,
    'Content-Type': 'application/json',
  },
});
