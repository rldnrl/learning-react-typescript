import React, { useState } from 'react';
import { v4 } from 'uuid'
import colorData from './data/color.json'
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import { Colors } from './types';
import './App.css';

function App() {
  const [colors, setColors] = useState(colorData.colors)

  const onRateColor = (id: string, rating: number) => {
    const newColors = colors.map((color) => color.id === id ? { ...color, rating } : color)
    setColors(newColors)
  }

  const onRemoveColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id)
    setColors(newColors)
  }

  return (
    <div className="App">
      <AddColorForm onColorAdd={({ title, color }) => {
        const newColor: Colors = [
          ...colors,
          {
            id: v4(),
            rating: 0,
            title,
            color
          }
        ]
        setColors(newColor)
      }} />
      <ColorList
        colors={colors}
        onRateColor={onRateColor}
        onRemoveColor={onRemoveColor}
      />
    </div>
  );
}

export default App;
