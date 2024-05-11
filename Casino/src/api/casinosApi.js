import axios from 'axios';

export const casinosApiAuth = axios.create({
  baseURL: 'http://smol-plus.dev2.ies-gaming.com:8282/api',
  headers: {
    // Authorization: ` Bearer ${'token'}`,
    key: 'Content-Type',
    value: 'application/json',
  },
});
