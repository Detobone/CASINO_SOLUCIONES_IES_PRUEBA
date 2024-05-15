import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getSlots = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/slots');
  const { data } = await axios.get('../mocks/slots.js');
  return data;
};

export const getSlotByID = async (id = 1) => {
  await sleep(5);
  //  const {data} = await axios.get(`/api/slots/${id}`);
  const { data } = await axios.get('../mocks/slots.js');
  return data;
};

export const useSlot = (id = 1) => {
  const slotIdQuery = useQuery({
    queryKey: ['slotID', id],
    queryFn: () => {
      getSlotByID(id);
    },
  });

  const slotsQuery = useQuery({
    queryKey: ['slots', getSlots()],
    queryFn: () => {
      getSlots();
    },
  });
  return { slotIdQuery, slotsQuery };
};
