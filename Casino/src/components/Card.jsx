import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  getCasinos,
  getCasinosByOperatorID,
  useCasino,
} from '../hooks/useCasino';
import { LoadingIcon } from './LoadingIcon';

export const Card = ({ data }) => {
  const [flip, setFlip] = useState(false);
  const { casinosByOperatorIdQuery } = useCasino({ operatorId: data.id });

  const onFlip = () => {
    setFlip(!flip);
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
                }}>
                Ver listado
              </small>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`card__side card__side--back card__side--back-1 ${
          flip ? 'card__rotate--back' : ''
        }`}>
        <div className="card__back-details">
          <div className="card__details">
            <h2 className="card__heading-span card__heading-span--1">
              {`Lista de casinos (${data.name})`}
            </h2>
            <ul>
              {casinosByOperatorIdQuery.isLoading && <LoadingIcon />}
              {casinosByOperatorIdQuery.data?.map((casino) => (
                <li key={casino.id}>
                  <a className="card__back-details--anchors">
                    <strong>ID:</strong> <small>{casino.id}</small>
                  </a>
                  <a className="card__back-details--anchors">
                    <strong>Nit:</strong> <small>{casino.nit}</small>
                  </a>
                  <a className="card__back-details--anchors">
                    <strong>Nombre:</strong> <small>{casino.name}</small>
                  </a>
                  <a className="card__back-details--anchors">
                    <strong>Dirección:</strong>{' '}
                    <small>{casino.direction}</small>
                  </a>
                  <a className="card__back-details--anchors">
                    <strong>Slots:</strong>{' '}
                    <small className="btn btn__card" role="button">
                      Ver listado
                    </small>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn__search" onClick={onFlip}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
