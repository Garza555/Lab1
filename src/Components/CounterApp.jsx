import { useState } from 'react';
import React from 'react';


export const CounterApp = () => {

    const [counter, setCounter] = useState(1);
    return (
      <div>
        <h1>Counter:{ counter}</h1>
        <button className= "btn btn-primary" onClick={ ()=> setCounter(counter +1)} > Add 1</button>
        <button className= "btn btn-primary" onClick={ ()=> setCounter(counter)} > Reset</button>
        <button className= "btn btn-primary" onClick={ ()=> setCounter(counter -1)} > Sub 1</button>



      </div>
    
        
    );
    }

