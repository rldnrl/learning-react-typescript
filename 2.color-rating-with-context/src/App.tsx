import React from 'react';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
