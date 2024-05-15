import { useState } from 'react';

export const Card = () => {
  const [flip, setFlip] = useState(false);

  const onFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className="card">
      <div
        className={`card__side card__side--front ${
          flip ? 'card__rotate--front' : ''
        }`}>
        <div className="card__picture card__picture--1">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--1">
            {'Nombre del operador'}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>
              <strong>Nit:</strong> <small>{'123456'}</small>
            </li>

            <li>
              <strong>Contrato:</strong> <small>{'123456'}</small>
            </li>

            <li>
              <strong>casinos:</strong>{' '}
              <small className="btn btn__card" role="button" onClick={onFlip}>
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
            <ul>
              <li>
                <a className="card__back-details--anchors">
                  <strong>ID:</strong> <small>{'id'}</small>
                </a>
                <a className="card__back-details--anchors">
                  <strong>Nit:</strong> <small>{'nit'}</small>
                </a>
                <a className="card__back-details--anchors">
                  <strong>Nombre:</strong> <small>{'nombre'}</small>
                </a>
                <a className="card__back-details--anchors">
                  <strong>Dirección:</strong> <small>{'dirección'}</small>
                </a>
              </li>
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
