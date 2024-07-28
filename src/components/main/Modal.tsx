// components/PortalModal.js
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
      <motion.div
        className="bg-white px-6 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>,
    document.body
  );
};

export default Modal;
