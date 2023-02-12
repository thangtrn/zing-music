import React from 'react';

const Menu = ({ children, ...props }) => {
   return (
      <div
         {...props}
         className="w-60 text-sm font-normal bg-secondary rounded-lg z-50 shadow-menu list-none"
      >
         <ul className="w-full py-[10px]">{children}</ul>
      </div>
   );
};

export default Menu;
