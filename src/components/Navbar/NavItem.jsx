import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { IoPlayCircleOutline } from '~/ultis/icons';

const Icon = ({ children, className = '' }) => {
   return (
      <span
         className={`${className} w-[20px] h-[20px] f-center mr-[10px] shrink-0`}
      >
         {children}
      </span>
   );
};

const NavItem = ({ icon, children, to }) => {
   const { pathname } = useLocation();

   let Comp = 'div';
   const props = {};
   if (to) {
      Comp = Link;
      props.to = to;
   }

   return (
      <li className="text-placeholder leading-normal hover:text-primary group">
         <Comp
            {...props}
            tabIndex={-1}
            className={`w-full flex items-center relative py-[15px] desktop:py-[8px] px-[25px] text-[13px] font-bold leading-[1.5] desktop:border-l-[3px] border-solid border-transparent cursor-pointer ${
               pathname === to
                  ? 'border-l-purple-primary text-primary bg-alpha'
                  : ''
            }`}
         >
            <Icon>{icon}</Icon>
            <span className="hidden desktop:flex items-center leading-normal">
               {children}
            </span>
            <Icon
               className={`${
                  pathname === to ? 'hidden' : 'desktop:group-hover:flex'
               } hidden absolute m-0 top-1/2 right-[17px] -translate-y-1/2`}
            >
               <IoPlayCircleOutline size={24} />
            </Icon>
         </Comp>
      </li>
   );
};

const NavItemV2 = ({ icon, children, to }) => {
   let Comp = 'div';
   const props = {};
   if (to) {
      Comp = Link;
      props.to = to;
   }

   return (
      <li className="text-placeholder leading-normal group">
         <Comp
            {...props}
            tabIndex={-1}
            className="w-full flex items-center relative py-[8px] px-[25px] text-[13px] font-normal leading-[1.5] desktop:border-l-[3px] border-solid border-transparent cursor-pointer group-hover:text-primary"
         >
            <Icon>{icon}</Icon>
            <span className="hidden desktop:flex items-center leading-normal">
               {children}
            </span>
            <Icon className="desktop:group-hover:flex hidden absolute m-0 top-1/2 right-[17px] -translate-y-1/2">
               <IoPlayCircleOutline size={24} />
            </Icon>
         </Comp>
      </li>
   );
};

export default NavItem;
export { NavItemV2 };
