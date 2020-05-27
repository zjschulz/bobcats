import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import NewReservationForm from './NewReservationForm.js';
import Reservations from './Reservations.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome/>
        <NewReservationForm/>
        <Reservations/>
      </header>
    </div>
  );
}

export default App;
