import React from 'react';
import { FixedSizeList } from 'react-window'
import { bigList } from './data'
import './App.css';

function App() {
  const renderRow = ({ index }: { index: number }) => (
    <>
      <img src={bigList[index].avatar} alt="avatar" width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </>
  )

  return (
    <div>
      <FixedSizeList
        height={window.innerHeight}
        width={window.innerWidth - 20}
        itemCount={bigList.length}
        itemSize={50}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

export default App;
