// components/PortalModal.js
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"  onClick={handleOutsideClick}>
      <div className="bg-white p-6 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-2 right-2" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
