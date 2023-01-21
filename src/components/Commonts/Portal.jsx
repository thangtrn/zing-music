import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, id = 'react-portal' }) => {
   const wrapperRef = useRef(null);
   if (wrapperRef.current === null && typeof document !== 'undefined') {
      const div = document.createElement('div');
      div.setAttribute('id', id);
      wrapperRef.current = div;
   }
   useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper || typeof document === 'undefined') {
         return;
      }
      document.body.appendChild(wrapper);
      return () => {
         document.body.removeChild(wrapper);
      };
   }, []);
   return createPortal(children, wrapperRef.current);
};

export default Portal;
