import React from 'react';

const Icon = ({ children, className = '', ...props }) => {
   return (
      <span {...props} className={`icon-left f-center ${className}`}>
         {children}
      </span>
   );
};

const MenuItem = ({
   iconLeft = null,
   iconRight = null,
   children,
   className = '',
}) => {
   return (
      <li className="cursor-pointer">
         <div
            className={`w-full flex items-center py-[10px] pl-[17px] pr-[20px] transition-all duration-200 ease-[ease] hover:bg-alpha hover:text-hover ${className}`}
         >
            <Icon className="mr-[10px]">{iconLeft}</Icon>
            <button className="w-full flex justify-between items-center">
               {children}
               {iconRight && <Icon className="icon-right">{iconRight}</Icon>}
            </button>
         </div>
      </li>
   );
};

export default MenuItem;
