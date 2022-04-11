import './App.css';

function Instructions() {

  return (
    <div className='instructions'>
      <h2>Instructions</h2>
      <p>Write an app using React and Typescript meeting the requirements laid out below. How to style the app is up to you! You may use whatever other open source libraries you see fit to get the job done.</p>

      <h2>Recuirements</h2>
      <p>1. There should be a button that increments a visible counter when a user clicks on it.</p>
      <p>2. The button clicks should be throttled such that more than 3 clicks in a second do not increment the counter.</p>
      <p>3. When the user has not clicked the button in at least 10 seconds:</p>
      <p>-  1. The button should change to a different color.</p>
      <p>-  2. The counter should decrease at a rate of 1 per second until it hits zero.</p>
      <p>4. The button should have a 5% chance on each click to go into overdrive:</p>
      <p>-  1. Overdrive causes each click on the button to increment the counter twice, instead of only once.</p>
      <p>-  2. Overdrive should last 10 seconds, after which the increments returns to normal.</p>
      <p>-  3. While in overdrive, there should be a timer on the screen that counts down how many seconds are left in overdrive.</p>
      <p>5. When the user reaches any multiple of 10 on the counter (10, 20, 30, etc), they should receive a trophy.</p>
      <p>-  1. The trophy should appear somewhere on the page indicating that the user reached that threshold.</p>
      <p>-  2. The trophy should not disappear if the counter decreases below the threshold for the trophy`</p>
    </div>
  );
}

export default Instructions;
