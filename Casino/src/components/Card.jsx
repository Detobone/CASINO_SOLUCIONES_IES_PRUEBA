import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  getCasinos,
  getCasinosByOperatorID,
  useCasino,
} from '../hooks/useCasino';
import { LoadingIcon } from './LoadingIcon';
import { getSlotsByCasinoID } from '../hooks/useSlot';
import { CasinosCard } from './CasinosCard';
import { SlotsCard } from './SlotsCard';

export const Card = ({ data }) => {
  const [flip, setFlip] = useState(false);
  const [showFace, setShowFace] = useState({
    showCasinos: true,
    showSlots: false,
    showModel: false,
  });

  const { casinosByOperatorIdQuery } = useCasino({ operatorId: data.id });

  const onFlip = () => {
    setFlip(!flip);
  };
  const onShowFace = (property, showFace) => {
    const newShowFace = { ...showFace };
    Object.entries(showFace).map(([key, value]) => {
      if (key !== property) newShowFace[key] = false;
      if (key === property) newShowFace[key] = true;
    });
    setShowFace({ ...newShowFace });
    // console.log('newShowFace', newShowFace);
  };

  const queryClient = useQueryClient();

  const preFetchCasinos = () => {
    queryClient.prefetchQuery({
      queryKey: ['casinos', { operadorID: data.id }],
      queryFn: () => getCasinosByOperatorID(data?.id),
      staleTime: 120 * 1000,
    });
  };
  //   const preSetCasinos = () => {
  //     queryClient.setQueryData(
  //       ['casinos', { operadorID: data.id }],
  //       casinosByOperatorIdQuery
  //     );
  //   };

  // const preFetchSlots = () => {
  //   queryClient.setQueryData(
  //     ['slots', { casinoID: casinoId }],
  //     getSlotsByCasinoID()
  //   );
  // };

  return (
    <div className="card" onMouseEnter={preFetchCasinos}>
      <div
        className={`card__side card__side--front ${
          flip ? 'card__rotate--front' : ''
        }`}>
        <div className="card__picture card__picture--1">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {data.name}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>
              <strong>Nit:</strong> <small>{data.nit}</small>
            </li>

            <li>
              <strong>Contrato:</strong> <small>{data.contract}</small>
            </li>

            <li>
              <strong>casinos:</strong>{' '}
              <small
                className="btn btn__card"
                role="button"
                onClick={() => {
                  onFlip();
                  getCasinosByOperatorID(data.id);
                  // onShowFace('showSlots', showFace);
                }}>
                Ver listado
              </small>
            </li>
          </ul>
        </div>
      </div>
      {/* back-side card   */}
      {/* back-side card  - casinos */}

      {showFace.showCasinos && (
        <div
          className={`card__side card__side--back card__side--back-1 ${
            flip ? 'card__rotate--back' : ''
          }`}>
          <div className="card__back-details">
            <div className="card__details">
              <h2 className="card__heading-span card__heading-span--1">
                {`Lista de casinos (${data.name})`}
              </h2>
              <CasinosCard
                showFace={showFace}
                onShowFace={onShowFace}
                operator={data}
                casino={casinosByOperatorIdQuery}
                queryClient={queryClient}
              />
            </div>
            <button className="btn btn__search" onClick={onFlip}>
              Go Back
            </button>
          </div>
        </div>
      )}

      {/* back-side card  - Slots */}
      {showFace.showSlots && (
        <div
          className={`card__side card__side--back card__side--back-1 ${
            flip ? 'card__rotate--back' : ''
          }`}>
          <div className="card__back-details">
            <div className="card__details">
              <h2 className="card__heading-span card__heading-span--1">
                {`Lista de Slots (${data.name})`}
              </h2>
              <SlotsCard
                showFace={showFace}
                onShowFace={onShowFace}
                operator={data}
                queryClient={queryClient}
                // slots={casinosByOperatorIdQuery}
              />
            </div>
            <button className="btn btn__search" onClick={onFlip}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
