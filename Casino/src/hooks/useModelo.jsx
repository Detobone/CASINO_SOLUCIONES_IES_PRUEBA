import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getModels = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/models');
  const { data } = await axios.get('../mocks/modelos.js');
  return data;
};

export const getModelByID = async (id = 1) => {
  await sleep(5);
  //  const {data} = await axios.get(`/api/models/${id}`);
  const { data } = await axios.get('../mocks/modelos.js');
  return data;
};

export const useModelo = (id = 1) => {
  const modelIdQuery = useQuery({
    queryKey: ['modelID', id],
    queryFn: () => {
      getModelByID(id);
    },
  });

  const modelsQuery = useQuery({
    queryKey: ['models', getSlots()],
    queryFn: () => {
      getModels();
    },
  });
  return { modelIdQuery, modelsQuery };
};
