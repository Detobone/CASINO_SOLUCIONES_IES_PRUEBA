import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { sleep } from '../helpers/sleep';

export const getSlots = async () => {
  await sleep(5);
  //  const {data} = await axios.get('/api/slots');
  const { data } = await axios.get('../mocks/slots.json');
  return data;
};

export const getSlotByID = async (id = 1) => {
  await sleep(5);
  //  const {data} = await axios.get(`/api/slots/${id}`);
  const { data } = await axios.get('../mocks/slots.json');
  return data;
};

export const getSlotsByCasinoID = async (casinoID = 1) => {
  await sleep(5);
  const filterArray = [];
  const slots = await getSlots();

  slots?.map((slot) => slot.casino.id === casinoID && filterArray.push(slot));
  return filterArray;
};

export const useSlot = ({ casinoId = 1 }) => {
  // const slotIdQuery = useQuery({
  //   queryKey: ['slotID', id],
  //   queryFn: () => {
  //     getSlotByID(id);
  //   },
  // });

  const slotsQuery = useQuery({
    queryKey: ['slots', getSlots()],
    queryFn: () => {
      getSlots();
    },
  });

  const slotsByCasinoIdQuery = useQuery({
    queryKey: ['slots', { casinoID: casinoId }],
    queryFn: () => getSlotsByCasinoID(casinoId),
    staleTime: 60 * 1000 * 60,
  });

  return { slotsQuery, slotsByCasinoIdQuery };
};
