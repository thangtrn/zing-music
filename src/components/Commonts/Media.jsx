import React from 'react';
import { BsFillPlayFill } from '~/ultis/icons';

const Media = ({ children, className = '', ...props }) => {
   return (
      <div
         {...props}
         className={`flex items-center p-[10px] rounded-[5px] hover:bg-alpha group/media ${className}`}
      >
         {children}
      </div>
   );
};

Media.Image = ({ src, size = '60px', onClick = () => {} }) => {
   return (
      <div
         onClick={onClick}
         style={{ width: size, height: size }}
         className="rounded overflow-hidden mr-[10px] flex-shrink-0 cursor-pointer"
      >
         <div className="w-full h-0 pb-[100%] bg-loading overflow-hidden relative cursor-pointer">
            {src && (
               <img
                  className="w-full h-full absolute inset-0 object-cover"
                  src={src}
                  alt="thumb"
               />
            )}
            <div className="hidden group-hover/media:flex items-center absolute inset-0 bg-dark-50 z-10">
               <div className="w-full h-full flex justify-evenly items-center">
                  <button
                     className="w-[26px] h-[26px] f-center rounded-full hover:brightness-90"
                     type="button"
                  >
                     <BsFillPlayFill size={26} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

Media.OnlyImage = ({ src, size = '60px', className = '' }) => {
   return (
      <div
         style={{ width: size, height: size }}
         className={`rounded overflow-hidden mr-[10px] flex-shrink-0 flex-grow-0 ${className}`}
      >
         <div className="relative w-full h-0 pb-[100%] bg-loading">
            {src && (
               <img
                  className="w-full h-full object-cover absolute inset-0"
                  src={src}
                  alt="media"
               />
            )}
         </div>
      </div>
   );
};

Media.Left = ({ children, className = '' }) => {
   return <div className={`flex ${className}`}>{children}</div>;
};

Media.Card = ({ children, className = '' }) => {
   return (
      <div className={`text-xs cursor-default flex flex-col ${className}`}>
         {children}
      </div>
   );
};

Media.Title = ({ children, className = '' }) => {
   return (
      <div
         className={`w-full text-truncate-1 text-sm text-primary font-medium hover:text-hover ${className}`}
      >
         {children}
      </div>
   );
};

Media.SubTitle = ({ children, className = '' }) => {
   return (
      <div
         className={`w-full text-truncate-1 mt-[3px] text-secondary ${className}`}
      >
         {children}
      </div>
   );
};

Media.Content = ({ children, className = '' }) => {
   return (
      <div className={`text-xs cursor-default flex flex-col ${className}`}>
         {children}
      </div>
   );
};

Media.Right = ({ children, subChildren, hover = true, className = '' }) => {
   return (
      <div
         className="flex-shrink-0 flex-grow-0 ml-[10px]"
         onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
         }}
      >
         <div
            className={`${
               hover ? 'hidden group-hover/media:flex' : 'flex'
            } ${className}`}
         >
            {children}
         </div>
         {subChildren && (
            <div
               className={`w-[46px] ${
                  hover ? 'block group-hover/media:hidden' : 'block'
               }`}
            >
               {subChildren}
            </div>
         )}
      </div>
   );
};

export default Media;
