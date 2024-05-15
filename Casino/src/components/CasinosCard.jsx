import { useQueryClient } from '@tanstack/react-query';
import { useCasino } from '../hooks/useCasino';
import { LoadingIcon } from './LoadingIcon';
import { useSlot } from '../hooks/useSlot';

export const CasinosCard = ({ showFace, onShowFace, casino, queryClient }) => {
  const { slotsByCasinoIdQuery } = useSlot({ casinoId: casino?.id });

  const preFetchSlots = () => {
    queryClient.prefetchQuery({
      queryKey: ['slots', { casinoID: casino?.id }],
      queryFn: getSlotsByCasinoID(casino?.id),
      staleTime: 120 * 1000,
    });
  };

  return (
    <>
      <ul onMouseEnter={preFetchSlots}>
        {casino.isLoading && <LoadingIcon />}
        {casino.data?.map((casino) => (
          <li key={'casino__' + casino?.id}>
            <a className="card__back-details--anchors">
              <strong>ID:</strong> <small>{casino?.id}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Nit:</strong> <small>{casino?.nit}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Nombre:</strong> <small>{casino?.name}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Dirección:</strong> <small>{casino?.direction}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Slots:</strong>{' '}
              <small
                className="btn btn__card"
                role="button"
                onClick={() => onShowFace('showSlots', showFace)}>
                Ver listado
              </small>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
