import React, { memo, useState } from 'react';

import { BsFillPlayFill } from '~/ultis/icons';

const ZingMedia = ({ mediaData, percent, number }) => {
   const [hover, setHover] = useState(false);
   const { encodeId, title, artistsNames, thumbnailM } = mediaData;
   return (
      <div
         className="flex items-center py-[10px] px-[15px] rounded-[5px] hover:bg-[#ffffff33] bg-[#ffffff12]"
         onMouseOver={() => setHover(true)}
         onMouseOut={() => setHover(false)}
      >
         <div className="flex flex-grow">
            <div className="mr-[15px] f-center">
               <span
                  className={`w-[22px] text-center text-[32px] font-black leading-[1] text-transparent ${
                     number <= 3 ? 'text-stroke-' + number : 'text-stroke'
                  }`}
               >
                  {number}
               </span>
            </div>
            <div className="w-[60px] h-[60px] rounded overflow-hidden mr-[10px] flex-shrink-0">
               <div className="w-full h-0 py-[50%] bg-loading overflow-hidden relative">
                  <img
                     className="w-full h-full absolute inset-0 object-cover"
                     src={thumbnailM}
                     alt="thumb"
                  />
                  {hover && (
                     <div className="flex items-center absolute inset-0 bg-dark-50 z-10">
                        <div className="w-full h-full flex justify-evenly items-center">
                           <button className="w-[26px] h-[26px] f-center rounded-full hover:brightness-90">
                              <BsFillPlayFill size={26} />
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <div className="text-xs cursor-default flex flex-col justify-center">
               <h3 className="w-full text-truncate-1 text-sm text-primary leading-[1.3] font-medium hover:text-hover">
                  {title}
               </h3>
               <h4 className="w-full text-truncate-1 mt-[3px] text-secondary">
                  {artistsNames}
               </h4>
            </div>
         </div>
         <div className="flex-shrink-0 ml-[10px]">
            <span className="text-base leading-[1.56] font-bold">
               {percent}%
            </span>
         </div>
      </div>
   );
};

export default memo(ZingMedia);
