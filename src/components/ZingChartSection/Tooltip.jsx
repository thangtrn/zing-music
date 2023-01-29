import React, { memo } from 'react';

const Tooltip = ({ tooltipData }) => {
   const { top, left, opacity, arrowLeft, data } = tooltipData;
   const { title, artistsNames, thumbnail, percent, backgroundColor } = data;

   return (
      <div
         className="absolute select-none w-[180px] h-[50px]"
         style={{
            top,
            left,
            opacity,
            transform: 'translateY(calc(-100% - 20px))',
         }}
      >
         <div
            className="flex items-center py-[5px] px-[5px] rounded-[5px]"
            style={{ background: backgroundColor }}
         >
            <div className="flex flex-grow">
               <div className="w-[40px] h-[40px] rounded overflow-hidden mr-[5px] flex-shrink-0">
                  <div className="w-full h-0 pb-[100%] bg-loading overflow-hidden relative">
                     <img
                        className="w-full h-full absolute inset-0 object-cover"
                        src={thumbnail}
                        alt="thumb"
                     />
                  </div>
               </div>
               <div className="text-xs cursor-default flex flex-col justify-center">
                  <h3 className="w-full text-truncate-1 text-primary leading-[1.3] font-medium hover:text-hover">
                     {title}
                  </h3>
                  <h4 className="w-full text-truncate-1 mt-[3px] text-secondary text-[10px]">
                     {artistsNames}
                     123
                  </h4>
               </div>
            </div>
            <div className="flex-shrink-0 ml-[10px]">
               <span className="text-[13px] leading-[1.56] font-bold">
                  {percent}%
               </span>
            </div>
         </div>
         <div
            className="absolute top-[98%] -translate-x-1/2"
            style={{
               left: arrowLeft,
               borderLeft: '10px solid transparent',
               borderRight: '10px solid transparent',
               borderTop: `10px solid ${backgroundColor}`,
            }}
         ></div>
      </div>
   );
};

export default memo(Tooltip);
