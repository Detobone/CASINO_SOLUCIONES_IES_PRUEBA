import axios from 'axios';

export const casinosApi = async (token) => {
  axios.create({
    baseURL: 'http://smol-plus.dev2.ies-gaming.com:8282',
    headers: {
      Authorization: ` Bearer ${token}`,
    },
  });
};
