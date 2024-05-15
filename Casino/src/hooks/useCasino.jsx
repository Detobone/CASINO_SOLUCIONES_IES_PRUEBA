import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getCasinos = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/casinos');
  const { data } = await axios.get('../mocks/casinos.json');
  console.log('Casinos', data);
  return data;
};

// export const getCasinosByID = async (id = 1) => {
//   await sleep(5);
//   //  const {data} = await axios.get(`/api/casinos/${id}`);
//   const { data } = await axios.get('../mocks/casinos.json');
//   return data;
// };

export const getCasinosByOperatorID = async (operatorID = 1) => {
  await sleep(5);
  const filterArray = [];
  const casinos = await getCasinos();

  casinos?.map(
    (casino) => casino.operator.id === operatorID && filterArray.push(casino)
  );
  console.log('filterArray', filterArray);
  return filterArray;
};

export const useCasino = ({ operatorId = 1 }) => {
  //   const casinosIdQuery = useQuery({
  //     queryKey: ['casinoID', casinoID],
  //     queryFn: () => {
  //       getCasinosByID(casinoID);
  //     },
  //   });

  const casinosQuery = useQuery({
    queryKey: ['casinos'],
    queryFn: () => getCasinos(),
    staleTime: 60 * 1000 * 60,
  });

  const casinosByOperatorIdQuery = useQuery({
    queryKey: ['casinos', { operadorID: operatorId }],
    queryFn: () => getCasinosByOperatorID(operatorId),
    staleTime: 60 * 1000 * 60,
  });

  return { casinosQuery, casinosByOperatorIdQuery };
};
