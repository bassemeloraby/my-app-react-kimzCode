import React, { useState } from 'react';
import './App.css';
import CardList from '../CardList/CardList';
import Filter from '../filter/Filter';

const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState('');
  const [state, setState] = useState([
    {
      id:1,
      name: 'bassem',
      age: 38,
      adress: 'madina',
      phone: '01013456994',
      type: 'men',
    },
    {
      id:2,
      name: 'farah',
      age: 33,
      adress: 'cairo',
      phone: '01013456994',
      type: 'girl',
    },
    {
      id:3,
      name: 'mohammed',
      age: 30,
      adress: 'alex',
      phone: '054555224777',
      type: 'men',
    },
    {
      id:4,
      name: 'mariam',
      age: 20,
      adress: 'jada',
      phone: '05688742554',
      type: 'girl',
    },
  ]);
  //handelers
  const deleteHndeler = (e, selectedID) => {
    // const deleteOperation = state.filter((el,idx) => idx !== clickedIdx)
    // setState(deleteOperation)
    setState((prvState) => {
      return prvState.filter((el) => el.id !== selectedID);
    });
  };

  const toggleHandelr = () => {
    setCardToggle(!cardToggle);
  };

  // const testHandelr = ()=>{
  //   console.log(inputEl.current.value)
  // }

  // const onClick = ()=>{
  //   inputEl.current.focus()
  // }

  const filterNames = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };
  return (
    <div className="mainContainer">
      <h1>Data Names</h1>
      <button style={{ marginBottom: '20px' }} onClick={toggleHandelr}>
        {cardToggle ? 'hide names' : 'show names'}
      </button>
      <div className={cardToggle ? 'show' : 'hide'}>
        <Filter filteration={filterNames} />
        <CardList
          namesList={namesHandler()}
          deletefunc={deleteHndeler}
        />
      </div>
    </div>
  );
};

export default App;
