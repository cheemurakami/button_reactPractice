import React from "react";
import { useState } from "react";

function ModalOn({ modal }) {
  if (modal) {
    return (
      <div className="modal-on">
        <p>Kiwi is awesome!</p>
        <button className="button">Back</button>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalOn;
