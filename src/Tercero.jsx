import React from "react";
import { heroes } from "./hero";  

export const Tercero = () => (
    <div>
        <h3>Lista de Héroes</h3>
        <ul>
            {heroes.map(hero => <li key={hero.id}>{hero.name}</li>)}
        </ul>
    </div>
);

export default Tercero;



