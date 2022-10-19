const Modal = ({ handleClose, children }) => {
  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='modal-header'>
          <button onClick={handleClose}>X</button>
        </div>
        <div className='modal-body-content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
