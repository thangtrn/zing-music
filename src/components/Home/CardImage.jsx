import React, { useState } from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { playBtn } from '../../assets/images';

import {
   // AiFillHeart,
   AiOutlineHeart,
   BiDotsHorizontalRounded,
} from '../../ultis/icons';

const CardImage = ({ src }) => {
   const [hover, setHover] = useState(false);
   return (
      <div
         className="w-full h-0 py-[50%] bg-loading overflow-hidden group relative"
         onMouseOver={() => setHover(true)}
         onMouseOut={() => setHover(false)}
      >
         <img
            className="w-full absolute inset-0 object-cover group-hover:scale-110 transition-all ease-[ease] duration-700 overflow-hidden"
            src={src}
            alt="thumb"
         />
         {hover && (
            <div className="flex items-center absolute inset-0 bg-dark-50 z-10">
               <div
                  className="w-full h-[50px] flex justify-evenly items-center"
                  onClick={(e) => e.preventDefault()}
               >
                  <Button tippyContent="Thêm vào thư viện">
                     <AiOutlineHeart size={20} />
                  </Button>
                  <Button size="45px" hoverTooltip={false}>
                     <img
                        src={playBtn}
                        alt="play-btn"
                        className="w-full h-full object-cover"
                     />
                  </Button>
                  <Button tippyContent="Khác">
                     <BiDotsHorizontalRounded size={20} />
                  </Button>
               </div>
            </div>
         )}
      </div>
   );
};

const Button = ({ children, size = '30px', tippyContent = null, ...props }) => {
   let TippyComp = React.Fragment;
   const settings = {};
   if (tippyContent) {
      TippyComp = Tippy;
      settings.content = (
         <span className="leading-[0] text-[11px]">{tippyContent}</span>
      );
      settings.placement = 'top';
      settings.arrow = true;
      settings.duration = 300;
      settings.delay = [75, 0];
   }

   return (
      <TippyComp {...settings}>
         <button
            {...props}
            className={`f-center w-[${size}] h-[${size}] rounded-full ${
               tippyContent
                  ? 'hover:bg-tooltip'
                  : 'hover:brightness-90 border border-[white]'
            }`}
         >
            {children}
         </button>
      </TippyComp>
   );
};

export default CardImage;
