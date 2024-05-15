import { useQueryClient } from '@tanstack/react-query';
import { getSlotsByCasinoID, useSlot } from '../hooks/useSlot';
import { useCasino } from '../hooks/useCasino';

export const SlotsCard = ({ showFace, onShowFace, queryClient }) => {
  const { slotsByCasinoIdQuery } = useCasino({ casinoId: 1 });

  // TODO: BRING THE CASINO ID TO CHARGE THE INFO.
  return (
    <>
      <ul>
        {slotsByCasinoIdQuery.isLoading && <LoadingIcon />}
        {slotsByCasinoIdQuery.data?.map((slot) => (
          <li key={'slot__' + slot.id}>
            <a className="card__back-details--anchors">
              <strong>ID:</strong> <small>{slot.id}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Serial:</strong> <small>{slot.serial}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Nuc:</strong> <small>{slot.nuc}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Inicializado:</strong> <small>{slot.inizialized}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Balance:</strong> <small>{slot.balance}</small>
            </a>
            <a className="card__back-details--anchors">
              <strong>Modelo:</strong>{' '}
              <small
                className="btn btn__card"
                role="button"
                onClick={onShowFace('showModel', showFace)}>
                Ver listado
              </small>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
