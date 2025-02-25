import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CounterApp from './Components/CounterApp'; 
import FormApp from './Components/FormApp'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      

      <SimpleForm />
      <CounterApp value={count} />

      
    </>
  );
}


export default App;
