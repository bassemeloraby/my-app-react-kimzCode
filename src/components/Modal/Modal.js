import React,{Fragment} from 'react';
import styles from './Modal.module.css';
const Modal = () => {
  return <Fragment>
  <div className={styles.backDrop}></div>
  <div className={styles.overlay}></div>
  </Fragment>;
};

export default Modal;
