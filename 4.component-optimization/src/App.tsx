import React, { useState } from 'react';
import './App.css';
import Cat from './components/Cat';

const isString = (message: string | null): message is string => {
  return typeof message === "string"
}

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw'])

  const addCat = () => {
    const newCat = prompt("Name a Cat")
    if (isString(newCat)) {
      setCats([...cats, newCat])
    }
  }

  return (
    <div className="App">
      {cats.map((name) => (
        <Cat
          key={name}
          name={name}
          meow={(name) => console.log(`${name} has meowed`)}
        />
      ))}
      <button onClick={addCat}>고양이 추가</button>
    </div>
  );
}

export default App;
