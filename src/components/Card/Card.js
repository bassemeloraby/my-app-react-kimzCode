import React from 'react';
import styles from './Card.module.css';
const Card = ({id,name, age, adress, phone, type ,deletefunc}) => {
    return (<div
        className={styles.cardWrapper}
        style={{ backgroundColor: type === 'girl' ? 'pink' : 'lightblue' }}
      >
        <div>Name : {name}</div>
        <div>age: {age}</div>
        <div>adress: {adress}</div>
        <div>Phone: {phone}</div>
        <div
          className={styles.deleteBtn}
          onClick={(event) => deletefunc(event, id)}
        >
          x
        </div>
      </div>
      );
}
 
export default Card;