import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingMessage } from './Loading';
import { StateCard } from './Card';
import React from 'react';

export const CustomHook = () => {
  const { counter, decrement, increment } = useCounter(0); // Empezamos desde el primer estado
  const { data, hasError, isLoading } = useFetch(`https://gaia.inegi.org.mx/wscatgeo/mgee/`);

  if (isLoading) return <LoadingMessage message="Cargando estados..." />;
  if (hasError) return <div className="alert alert-danger">Error: {hasError}</div>;
  if (!data || data.length === 0) return <div className="alert alert-warning">No hay datos disponibles.</div>;

  const state = data[counter];

  return (
    <div>
      <h1>Datos de los Estados de México</h1>
      <hr />

      <StateCard 
        name={state.nom_agee}
        abbreviation={state.nom_abrev}
        population={state.pob}
        femalePopulation={state.pob_fem}
        malePopulation={state.pob_mas}
        households={state.viv}
      />

      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={() => decrement()} disabled={counter === 0}>
          Anterior
        </button>
        <button className="btn btn-primary" onClick={() => increment()} disabled={counter >= data.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

