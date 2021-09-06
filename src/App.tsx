import React from 'react';
import colorData from './data/color.json'
import './App.css';
import ColorList from './components/ColorList';

function App() {
  return (
    <div className="App">
      <ColorList colors={colorData.colors} />
    </div>
  );
}

export default App;
