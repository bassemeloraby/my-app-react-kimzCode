import React,{Fragment} from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = () => {
  return  <div className={styles.backDrop}></div>
};

 const Overlay=() => {
  return   <div className={styles.overlay}></div>
};

const Modal = () => {
  return <Fragment>
  {ReactDOM.createPortal(
    <Fragment>
      <BackDrop/>
      <Overlay/>
    </Fragment>,
    document.getElementById('Modal')
  )}
  </Fragment>
};

export default Modal;
