import React, { memo } from 'react';

import { ButtonTippy } from '~/components/Commonts';
import { playBtn } from '~/assets/images';

const Image = ({
   src,
   className = '',
   onClick = () => {},
   IconLeft = null,
   IconRight = null,
}) => {
   return (
      <div
         className={`w-full h-0 pb-[100%] bg-loading overflow-hidden group/image relative rounded ${className}`}
      >
         {src && (
            <img
               className="w-full absolute inset-0 object-cover group-hover/image:scale-110 transition-all ease-[ease] duration-700 overflow-hidden"
               src={src}
               alt="thumb"
            />
         )}
         <div className="group-hover/image:flex hidden items-center absolute inset-0 bg-dark-50 z-10">
            <div
               className="w-full h-[50px] flex justify-evenly items-center"
               onClick={(e) => e.preventDefault()}
            >
               {IconLeft}
               <ButtonTippy
                  className="hover:brightness-90 border border-[white]"
                  size="45px"
                  onClick={onClick}
               >
                  <img
                     src={playBtn}
                     alt="play-btn"
                     className="w-full h-full object-cover"
                  />
               </ButtonTippy>
               {IconRight}
            </div>
         </div>
      </div>
   );
};

export default memo(Image);
