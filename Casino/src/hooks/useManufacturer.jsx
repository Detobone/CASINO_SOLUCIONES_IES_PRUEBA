import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getManufacturers = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/manufacturers');
  const { data } = await axios.get('../mocks/fabricantes.js');
  return data;
};

export const getManufacturerByID = async (id = 1) => {
  await sleep(5);
  //  const {data} = await axios.get(`/api/manufacturers/${id}`);
  const { data } = await axios.get('../mocks/fabricantes.js');
  return data;
};

export const useManufacturer = (id) => {
  const manufacturerIdQuery = useQuery({
    queryKey: ['manufacturerID', id],
    queryFn: () => {
      getManufacturerByID(id);
    },
  });

  const manufacturersQuery = useQuery({
    queryKey: ['manufacturers', getManufacturers()],
    queryFn: () => {
      getManufacturers();
    },
  });
  return {
    manufacturerIdQuery,
    manufacturersQuery,
  };
};
