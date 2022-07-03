import React from 'react';
import styles from './Card.module.css'

const Card = ({namesList ,type}) => {
    const cards = namesList.map(({name,age,adress,phone},idx)=>(
        <div className={styles.cardWrapper} key={idx} style={{backgroundColor: type==="girl"? "pink": "lightblue"}}>
        <div>Name : {name}</div>
        <div>age: {age}</div>
        <div>adress: {adress}</div>
        <div>Phone: {phone}</div>
        <div className={styles.deleteBtn} onClick = {()=>alert('lool')}>x</div>
      </div>
      ))
  return <div>{cards}</div>;
};

export default Card;
