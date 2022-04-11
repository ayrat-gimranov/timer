import './App.css';
import { useState, useEffect } from 'react';
import Instructions from './Instrustions';

function App() {

  const [counter, setCounter] = useState(0);
  const [threshold, setThreshold] = useState(10);
  const [trophy, setTrophy] = useState('');
  const [overdrive, setOverdrive] = useState(false);
  const [odTimeLeft, setOdTimeLeft] = useState(0);
  const [inactivityId, setInactivityId] = useState(null);
  const [buttonInactive, setButtonInactive] = useState(false);
  const [threeCount, setThreeCount] = useState(0);
  const [threeClickTimerId, setThreeClickTimerId] = useState(null);


  if (counter >= threshold) {
    setTrophy(threshold);
    let newThreshold = threshold + 10;
    setThreshold(newThreshold)
  }
  
  function handleClick() {
    refreshInactivityTimer();
    if (threeCount < 3) {
      increaseCounter();
      setThreeCount(counter => counter + 1)
      if (!threeClickTimerId) {
        let newTimer = setTimeout(() => {
          setThreeCount(0);
          setThreeClickTimerId(null)
        }, 1000)
        setThreeClickTimerId(newTimer);
      }
    }
  }

  function refreshInactivityTimer() {
    setButtonInactive(false);
    if (inactivityId) clearTimeout(inactivityId);
    let newInactiveId = setTimeout(() => {
      setButtonInactive(true);
      setCounter(counter => counter - 1)
    }, 10000);
    setInactivityId(newInactiveId);
  }

  function increaseCounter() {
    if (!overdrive && Math.random() < 0.05) {
      setOverdrive(true);
    };
    let difference = overdrive ? 2 : 1;
    setCounter(counter => counter + difference)
  }

  function turnOffOverdrive() {
    setOverdrive(false);
  }

  useEffect(() => {
    if (counter === 0) {
      setButtonInactive(false)
    }
  }, [counter])

  useEffect(() => {
    let timer;
    if (buttonInactive) {
      timer = setInterval(() => {
        setCounter(counter => counter - 1)
      }, 1000)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [buttonInactive])

  useEffect(() => {
    if (overdrive) {
      setOdTimeLeft(10)
    }
  }, [overdrive])

  useEffect(() => {
    if (odTimeLeft > 0) {
      const timerId = setTimeout(() => {
        setOdTimeLeft(odTimeLeft - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    }
    if (odTimeLeft === 0) {
      turnOffOverdrive()
    }
  }, [odTimeLeft])

  const overdriveMode = overdrive ? { color: "red" } : {}
  return (
    <>
      <header className='Header'>
        <h1>This is a Timed Button app</h1>
      </header>
      <main>
        <div className='upperPage'>
          <div className='trophyBox'>
            <h2>Trophy Level</h2>
            <h1>{trophy}</h1>
          </div>
          <div className='App'>
            <h2>COUNTER</h2>
            <h3 style={overdriveMode}>{counter}</h3>
            <button onClick={() => handleClick()} style={buttonInactive ? { backgroundColor: "red" } : {}}>Increase!</button>
          </div>
          <div className={overdrive ? 'overdrive' : 'trophyBox'}>
            <h4>Overdrive: <span style={overdriveMode}>{overdrive ? 'ON' : 'OFF'}</span></h4>
            <h4>Timer</h4>
            <h3 style={overdriveMode}>{odTimeLeft}</h3>
          </div>
        </div>
        <Instructions />
      </main>
    </>
  );
}

export default App;
