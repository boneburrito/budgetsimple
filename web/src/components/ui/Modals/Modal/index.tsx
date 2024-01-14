import React from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal = React.memo<ModalProps>(({ children, onClose }) => {
  return (
    <div className="modal-mains">
      <div className="modal-mask" onClick={onClose} />
      <div className="modal">{children}</div>
    </div>
  );
});

export default Modal;
