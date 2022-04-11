import './App.css';
import { useState, useEffect } from 'react';
import Instructions from './Instrustions';

function App() {

  const [counter, setCounter] = useState(0);
  const [threshold, setThreshold] = useState(10);
  const [currentThrophy, setCurrentThrophy] = useState('');
  const [overdrive, setOverdrive] = useState(false);
  
  console.log('Threshold is', threshold)
  if (counter >= threshold) {
    setCurrentThrophy(threshold);
    let newThreshold = threshold + 10;
    setThreshold(newThreshold)
  }

  function increaseCounter() {
    if (!overdrive && Math.random() < 0.05) {
      setOverdrive(true);
      console.log('Hit! Started overdrive!')
    };
    let difference = overdrive ? 2 : 1;
    let increasedCount = counter + difference;
    setCounter(increasedCount)
  }

  function decreaseCounter() {
    let increasedByOne = counter - 1;
    setCounter(increasedByOne)
  }

  function turnOffOverdrive() {
    setOverdrive(false);
    console.log('Turned off overdirve!')
  }

  useEffect(() => {
    if (overdrive) {
      setTimeout(turnOffOverdrive, 10000)
    }
  }, [overdrive])

  return (
    <>
      <header className='Header'>
        <h1>This is a Timed Button app</h1>
      </header>
      <main>
        <div className='upperPage'>
          <div className='trophyBox'>
            <h2>Trophy Level</h2>
            <h1>{currentThrophy}</h1>
          </div>
          <div className='App'>
            <h2>COUNTER</h2>
            <h3>{counter}</h3>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
          </div>
        </div>
        <Instructions />
      </main>
    </>
  );
}

export default App;
