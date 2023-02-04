import React from 'react';
import Portal from './Portal';

const Modal = ({ children, isOpen, close = () => {} }) => {
   if (!isOpen) return null;
   return (
      <Portal isOpen={isOpen}>
         <div
            onClick={close}
            className="fixed inset-0 bg-dark-50 f-center z-[9999]"
         >
            <div className="max-h-full rounded-lg text-primary bg-secondary">
               {children}
            </div>
         </div>
      </Portal>
   );
};

export default Modal;
