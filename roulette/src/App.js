import React from 'react';
import BetTable from './components/Table/BetTable';
import Header from './components/Header'
import WheelControl from './components/WheelControl';

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
      <WheelControl />
      <BetTable />
      </div>
      
      
    </div>
  );
}

export default App;
