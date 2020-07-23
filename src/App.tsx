import React from 'react';

import './App.css';
import ChkBox from "./components/ChkBox";
import Drpdown from "./components/Drpdown";



function App() {
  return (
    <div className="App">
      <h3>Dropdown</h3>
      <Drpdown  />
      <h3>CheckBox</h3>
      <ChkBox value='One' defaultChecked={false} checked={false} name='chbx1' className='ChkBox1' />
      <ChkBox value='Two' defaultChecked={false} checked={false} name='chbx1' className='ChkBox1' />
      <ChkBox value='Three' defaultChecked={false} checked={false} name='chbx1' className='ChkBox1' />
      <ChkBox value='Four' defaultChecked={false} checked={false} name='chbx1' className='ChkBox1' />
    </div>
  );
}

export default App;
