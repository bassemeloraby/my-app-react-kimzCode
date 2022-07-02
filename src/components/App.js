import React from 'react';
import './App.css';
import Card from './card';
const App = () => {
  const boys = [
    { name: 'bassem', age: 38, adress: 'madina', phone: '01013456994' },
    { name: 'mohammed', age: 30, adress: 'alex', phone: '054555224777' },
    { name: 'ahmed', age: 20, adress: 'jada', phone: '05688742554' },
  ];
  const girls = [
    { name: 'abeer', age: 38, adress: 'madina', phone: '01013456994' },
    { name: 'amani', age: 30, adress: 'alex', phone: '05454224777' },
    { name: 'nermin', age: 20, adress: 'jada', phone: '05688742554' },
  ];
  
  return (
    <div className="mainContainer">
    <h2>boys namesList</h2>
    <Card namesList = {boys} type= 'men'/>
    <h2>girls namesList</h2>
    <Card namesList = {girls} type= 'girl'/>
    </div>
  );
};

export default App;
