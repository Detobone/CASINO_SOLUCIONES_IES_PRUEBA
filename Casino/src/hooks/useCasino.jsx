import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getCasinos = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/casinos');
  const { data } = await axios.get('../mocks/casinos.js');
  return data;
};

export const getCasinosByID = async (id = 1) => {
  await sleep(5);
  //  const {data} = await axios.get(`/api/casinos/${id}`);
  const { data } = await axios.get('../mocks/casinos.js');
  return data;
};

export const useCasino = (id) => {
  const casinosIdQuery = useQuery({
    queryKey: ['casinoID', id],
    queryFn: () => {
      getCasinosByID(id);
    },
  });

  const casinosQuery = useQuery({
    queryKey: ['casinos', getCasinos()],
    queryFn: () => {
      getCasinos();
    },
  });
  return { casinosIdQuery, casinosQuery };
};
