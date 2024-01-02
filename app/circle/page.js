import React from 'react';
import CircularProgressBar from '../../components/CircularProgressBar ';

function App() {
    const x = -50;
  return (
    <div className="App">
      <h1>Circular Progress Bar Example</h1>
      <CircularProgressBar progress={50} /> {/* 50% progress, green color */}
      <CircularProgressBar progress={-50} /> 
    </div>
  );
}

export default App;
