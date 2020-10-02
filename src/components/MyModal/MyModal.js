import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './MyModal.css'

const MyModal = ({
    open,
    setOpen,
    children
}) =>{

    const onCloseModal = (event) => {
      if(event) event.preventDefault()
      setOpen(false)
    }

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <div className="MyModal">
          {children}
        </div>
      </Modal>
    )
}

export default MyModal
