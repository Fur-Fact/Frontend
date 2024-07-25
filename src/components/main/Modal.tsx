// components/PortalModal.js
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}


const Modal = ({ isOpen, onClose, children }:ModalProps) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-50"  onClick={handleOutsideClick}>
      <div className="bg-white px-6 rounded-2xl shadow-lg" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
