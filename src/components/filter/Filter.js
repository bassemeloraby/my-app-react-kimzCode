import React, {useState} from 'react';
import styles from './Filter.module.css';

const Filter = () => {
    const [filter,setFilter] = useState('')

    const filterHandler =(e)=>{
        const name = e.target.value
       setFilter(name)
    }
  return (
    <div className={styles.mp}>
      <input
        type="text"
        placeholder="filter by name"
        value={filter}
        onChange={filterHandler}
      ></input>
    </div>
  );
};

export default Filter;
