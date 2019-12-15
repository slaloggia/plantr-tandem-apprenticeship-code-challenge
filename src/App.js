import React from 'react';
import './App.css';
import PlantSchedule from './components/plantSchedule';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>
          Your Plantr Watering Schedule
        </h1>
      </header>
      <div className="schedule" >
        <PlantSchedule />
      </div>
      <div className="footer">
      </div>
    </div>
  )};
}

export default App;
