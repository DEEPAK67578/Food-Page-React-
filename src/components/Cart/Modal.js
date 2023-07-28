import { useState } from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    
  function ModalHider() {
    props.modalCloser()
  }
  return <div style={{display:props.display}} className={styles.backdrop} onClick={ModalHider}>{props.children}</div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal} style={{display:props.display}}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <div>
      <Backdrop modalCloser={props.modalCloser} display={props.display}></Backdrop>
      <ModalOverlay children={props.children} display={props.display}></ModalOverlay>
    </div>
  );
};

export default Modal;
