import React from 'react'
import { useState }from 'react'

function ModalOff() {
  const [modal, setModal] = useState(false)
  const buttonToggle = () => {
    setModal(!modal)
  }
  
  return (
    <div className="modal-off">
      {console.log(modal)}
        <button className="button" onClick={() => {buttonToggle()}}>
          Press this douchey button
        </button>
    </div>
  )
}

export default ModalOff
