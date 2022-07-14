import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop = ({close}) => {
  return <div className={styles.backDrop} onClick={close}></div>;
};

const Overlay = () => {
  return <div className={styles.overlay}></div>;
};

const Modal = ({ show, closeModal }) => {
  return (
    show && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <BackDrop close={closeModal}/>
            <Overlay />
          </Fragment>,
          document.getElementById('Modal')
        )}
      </Fragment>
    )
  );
};

export default Modal;
