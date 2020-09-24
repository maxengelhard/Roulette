import React from 'react';
import BetTable from './components/Table/BetTable';
import LeftSide from './components/LeftSide'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <div style={{display: 'flex'}}>
      <LeftSide />
      <BetTable />
      </div>
      
      
    </div>
  );
}

export default App;
