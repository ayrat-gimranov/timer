import './App.css';
import { useState } from 'react';
import Instructions from './Instrustions';

function App() {

  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    let increasedByOne = counter + 1;
    setCounter(increasedByOne)
  }

  return (
    <>
      <header className='Header'>
        <h1>This is a Timed Button app</h1>
      </header>
      <main>
        <div className='App'>
          <h2>COUNTER</h2>
          <h3>{counter}</h3>
          <button onClick={increaseCounter}>Click!</button>
        </div>
        <Instructions />
      </main>
    </>
  );
}

export default App;
