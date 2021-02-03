import ModalOn from "./ModalOn";
import React from "react";
import { useState } from "react";

function ModalOff() {
  const [modal, setModal] = useState(false);
  
  const buttonToggle = () => {
    setModal(!modal);
  };

  if(modal){
    return <ModalOn modal={modal}/>
  } else {
    return (
      <div className="modal-off">
        <button
          className="button"
          onClick={() => {
            buttonToggle();
          }}
        >
          Press this button
        </button>
      </div>
    );
  }
}

export default ModalOff;
