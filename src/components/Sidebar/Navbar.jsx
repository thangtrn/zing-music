import React from 'react';

const Navbar = ({ className = '', children }) => {
   return (
      <div className={`w-full mb-[15px] list-none ${className}`}>
         {children}
      </div>
   );
};

export default Navbar;
