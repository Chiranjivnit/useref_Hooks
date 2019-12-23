import React from 'react';
import './App.css';
import FocusInput from './components/FocusInput';
import TimerHook from './components/TimerHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TimerHook/>
         <FocusInput/>
        
      </header>
    </div>
  );
}

export default App;
