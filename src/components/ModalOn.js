import React from 'react'

function ModalOn({buttonToggle}) {
 
  return (
    <div className="modal-on">
        <p>Kiwi is awesome!</p>
        <button className="button" onClick={buttonToggle}>
          Back
        </button>
      </div>
  )
}

export default ModalOn
