import React from 'react';

const Card = ({namesList ,type}) => {
    const cards = namesList.map(({name,age,adress,phone},idx)=>(
        <div className="cardWrapper" key={idx} style={{backgroundColor: type==="girl"? "pink": "lightblue"}}>
        <div>Name:{name}</div>
        <div>age: {age}</div>
        <div>adress: {adress}</div>
        <div>Phone: {phone}</div>
      </div>
      ))
  return <div>{cards}</div>;
};

export default Card;
