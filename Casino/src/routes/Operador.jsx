import { useEffect } from 'react';
import { Card, LoadingIcon } from '../components';
import { getOperators, useOperator } from '../hooks/useOperator';

export const Operador = () => {
  const { operatorsQuery } = useOperator();

  if (operatorsQuery.isLoading) return <LoadingIcon />;

  return (
    <section>
      {operatorsQuery.data?.map((operator) => (
        <Card key={operator.id} data={operator} />
      ))}
    </section>
  );
};
