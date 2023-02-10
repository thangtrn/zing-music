import React from 'react';
const Text = ({ children, className = '' }) => {
   return (
      <div className={`text-secondary text-xs leading-[1.75] ${className}`}>
         {children}
      </div>
   );
};

export default Text;
