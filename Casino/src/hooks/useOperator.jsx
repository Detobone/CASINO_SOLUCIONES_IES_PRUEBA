import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getOperators = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/operators');
  const { data } = await axios.get('../mocks/operators.json');
  console.log('data', data);
  return data;
};

export const getOperatorByID = async (id = 1) => {
  await sleep(5);
  //  const {data} = await axios.get(`/api/operators/${id}`);
  const { data } = await axios.get('../mocks/operators.json');
  return data;
};

export const useOperator = (id = 1) => {
  //   const operatorIdQuery = useQuery({
  //     queryKey: ['operatorID', id],
  //     queryFn: () => {
  //       getOperatorByID(id);
  //     },
  //   });

  const operatorsQuery = useQuery({
    queryKey: ['operators', getOperators || []],
    queryFn: () => getOperators(),
  });
  return {
    // operatorIdQuery,
    operatorsQuery,
  };
};
