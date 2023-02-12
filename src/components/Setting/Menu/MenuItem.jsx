import React from 'react';

const Icon = ({ children, className = '', ...props }) => {
   return (
      <span {...props} className={`w-5 h-5 f-center mr-[10px] ${className}`}>
         {children}
      </span>
   );
};

const MenuItem = ({ iconLeft = null, iconRight = null, children }) => {
   return (
      <li>
         <div className="w-full flex items-center py-[12px] pl-[17px] pr-[20px] transition-all duration-200 ease-[ease] hover:bg-alpha hover:text-hover">
            <Icon>{iconLeft}</Icon>
            <div className="w-full flex justify-between items-center leading-normal">
               {children}
               {iconRight && (
                  <Icon className="relative -right-[15px]">{iconRight}</Icon>
               )}
            </div>
         </div>
      </li>
   );
};

export default MenuItem;
