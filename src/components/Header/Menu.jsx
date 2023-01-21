import React from 'react';

const Menu = ({ children, footer = false }) => {
   return (
      <div className="w-60 absolute top-[50px] right-0 text-sm font-normal bg-secondary rounded-lg z-50 shadow-menu list-none">
         <div className="w-full py-[10px]">{children}</div>
      </div>
   );
};

export default Menu;
