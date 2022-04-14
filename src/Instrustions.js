import './App.css';

function Instructions() {

  return (
    <div className='instructions'>
      <h2>Instructions</h2>
      <p>Write an app using React and Typescript meeting the requirements laid out below. How to style the app is up to you! You may use whatever other open source libraries you see fit to get the job done.</p>

      <h2>Recuirements</h2>
      <ol>
        <li>There should be a button that increments a visible counter when a user clicks on it.</li>
        <li>The button clicks should be throttled such that more than 3 clicks in a second do not increment the counter.</li>
        <li>When the user has not clicked the button in at least 10 seconds:
          <ol>
            <li>The button should change to a different color.</li>
            <li>The counter should decrease at a rate of 1 per second until it hits zero.</li>
          </ol>
        </li>
        <li>The button should have a 5% chance on each click to go into overdrive:
          <ol>
            <li>Overdrive causes each click on the button to increment the counter twice, instead of only once.</li>
            <li>Overdrive should last 10 seconds, after which the increments returns to normal.</li>
            <li>While in overdrive, there should be a timer on the screen that counts down how many seconds are left in overdrive.</li>
          </ol>
        </li>
        <li>When the user reaches any multiple of 10 on the counter (10, 20, 30, etc), they should receive a trophy.
          <ol>
            <li>The trophy should appear somewhere on the page indicating that the user reached that threshold.</li>
            <li>The trophy should not disappear if the counter decreases below the threshold for the trophy`</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default Instructions;
