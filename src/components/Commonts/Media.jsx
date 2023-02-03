import React from 'react';
import { timeSince } from '~/helpers';
import { BsFillPlayFill } from '~/ultis/icons';

const Media = ({ children, className = '' }) => {
   return (
      <div
         className={`flex items-center p-[10px] rounded-[5px] hover:bg-alpha group/media ${className}`}
      >
         {children}
      </div>
   );
};

Media.Image = ({ src, size = '60px' }) => {
   return (
      <div
         style={{ width: size, height: size }}
         className="rounded overflow-hidden mr-[10px] flex-shrink-0"
      >
         <div className="w-full h-0 pb-[100%] bg-loading overflow-hidden relative">
            <img
               className="w-full h-full absolute inset-0 object-cover"
               src={src}
               alt="thumb"
            />
            <div className="hidden group-hover/media:flex items-center absolute inset-0 bg-dark-50 z-10">
               <div className="w-full h-full flex justify-evenly items-center">
                  <button className="w-[26px] h-[26px] f-center rounded-full hover:brightness-90">
                     <BsFillPlayFill size={26} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

Media.Left = ({ children, className = '' }) => {
   return <div className={`flex ${className}`}>{children}</div>;
};

Media.Card = ({ children, releaseDate, className = '' }) => {
   return (
      <div className={`text-xs cursor-default flex flex-col ${className}`}>
         {children}
         {releaseDate && (
            <h4 className="w-full text-truncate-1 mt-[3px] text-secondary">
               {timeSince(releaseDate)}
            </h4>
         )}
      </div>
   );
};

Media.Title = ({ children, className = '' }) => {
   return (
      <div
         className={`w-full text-truncate-1 text-sm text-primary leading-[1.3] font-medium hover:text-hover ${className}`}
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
      <div className="flex-shrink-0 flex-grow-0 ml-[10px]">
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
