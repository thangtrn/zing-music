import React, { memo, useState } from 'react';

import { BsFillPlayFill, BiDotsHorizontalRounded } from '../../ultis/icons';
import { ButtonTippy } from '../Commonts';
import { timeSince } from '../../helpers';

const MediaItem = ({ mediaData }) => {
   const [hover, setHover] = useState(false);
   const { encodeId, title, artistsNames, thumbnailM, releaseDate } = mediaData;

   return (
      <div
         className="flex items-center p-[10px] rounded-[5px] hover:bg-alpha"
         onMouseOver={() => setHover(true)}
         onMouseOut={() => setHover(false)}
      >
         <div className="flex flex-grow">
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
            <div className="text-xs cursor-default">
               <h3 className="w-full text-truncate-1 text-sm text-primary leading-[1.3] hover:text-hover">
                  {title}
               </h3>
               <h4 className="w-full text-truncate-1 mt-[3px] text-secondary">
                  {artistsNames}
               </h4>
               {releaseDate && (
                  <h4 className="w-full text-truncate-1 mt-[3px] text-secondary">
                     {timeSince(releaseDate)}
                  </h4>
               )}
            </div>
         </div>
         {hover && (
            <div className="flex-shrink-0 ml-[10px]">
               <ButtonTippy tippyContent="Khác" size="38px">
                  <BiDotsHorizontalRounded />
               </ButtonTippy>
            </div>
         )}
      </div>
   );
};

export default memo(MediaItem);
