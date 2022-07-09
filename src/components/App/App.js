import React, { useState } from 'react';
import './App.css';
import Card from '../Card/Card';
const App = () => {
  const [state, setState] = useState([
    { name: 'bassem', age: 38, adress: 'madina', phone: '01013456994' },
    { name: 'mohammed', age: 30, adress: 'alex', phone: '054555224777' },
    { name: 'ahmed', age: 20, adress: 'jada', phone: '05688742554' },
  ]);

  const deleteHndeler = (e,clickedIdx) => {
    const deleteOperation = state.filter((el,idx) => idx !== clickedIdx)
    setState(deleteOperation)
  }
  return (
    <div className="mainContainer">
      <h2>boys namesList</h2>
      <Card namesList={state} type="men" deletefunc = {deleteHndeler} />
    </div>
  );
};

export default App;
