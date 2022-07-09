import React, { useState } from 'react';
import './App.css';
import Card from '../Card/Card';
import Filter from '../filter/Filter';

const App = () => {
  
  const [cardToggle, setCardToggle] = useState(true);
  const [filter,setFilter] = useState('')
  const [state, setState] = useState([
    { name: 'bassem', age: 38, adress: 'madina', phone: '01013456994' },
    { name: 'mohammed', age: 30, adress: 'alex', phone: '054555224777' },
    { name: 'ahmed', age: 20, adress: 'jada', phone: '05688742554' },
  ]);
//handelers
  const deleteHndeler = (e, clickedIdx) => {
    // const deleteOperation = state.filter((el,idx) => idx !== clickedIdx)
    // setState(deleteOperation)
    setState((prvState) => {
      return prvState.filter((el, idx) => idx !== clickedIdx);
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
  
  const filterNames = (name)=>{
    setFilter(name)
  }

    const namesHandler =()=>{
      if(filter.length !==0){
        return state.filter((el)=> el.name.includes(filter) )
      }
      return state
    }
  return (
    <div className="mainContainer">
      <h1>boys namesList</h1>
      <button style={{ marginBottom: '20px' }} onClick={toggleHandelr}>
        {cardToggle ? 'hide names' : 'show names'}
      </button>
      <div className={cardToggle ? 'show' : 'hide'}>
        <Filter filteration={filterNames}/>
        <Card namesList={namesHandler()} type="men" deletefunc={deleteHndeler} />
      </div>
    </div>
  );
};

export default App;
