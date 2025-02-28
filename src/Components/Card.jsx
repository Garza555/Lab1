import React from "react";

export const StateCard = ({ name, abbreviation, population, femalePopulation, malePopulation, households }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{name} ({abbreviation})</h2>
        <p className="card-text"><strong>Población total:</strong> {population}</p>
        <p className="card-text"><strong>Población femenina:</strong> {femalePopulation}</p>
        <p className="card-text"><strong>Población masculina:</strong> {malePopulation}</p>
        <p className="card-text"><strong>Viviendas:</strong> {households}</p>
      </div>
    </div>
  );
};
