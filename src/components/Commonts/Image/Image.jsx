import React, { memo } from 'react';
import './image.css';

import { ButtonTippy, LazyImage } from '~/components/Commonts';
import { gifPlaying, playBtn } from '~/assets/images';
import { CSSTransition } from 'react-transition-group';

const Image = ({
   src,
   className = '',
   isPlaying = false,
   isRotate = false,
   onClick = () => {},
   IconLeft = null,
   IconRight = null,
}) => {
   return (
      <CSSTransition
         in={isPlaying && isRotate}
         classNames="image-wrapper"
         timeout={1000}
      >
         <div
            className={`w-full h-0 pb-[100%] overflow-hidden group/image relative ${
               isRotate ? 'image-wrapper' : 'rounded'
            } ${isRotate && isPlaying && 'active'} ${className}`}
         >
            <div
               className={`absolute inset-0 bg-loading ${
                  isRotate && 'image-spin'
               }`}
            >
               <LazyImage
                  className="w-full h-full object-cover group-hover/image:scale-110 transition-all ease-[ease] duration-700 overflow-hidden"
                  src={src}
                  alt="thumb"
               />
            </div>
            <div
               className={`${
                  isPlaying
                     ? `flex ${isRotate ? '' : 'bg-dark-50'}`
                     : 'group-hover/image:flex hidden bg-dark-50'
               } items-center absolute inset-0 z-10`}
            >
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
                     {isPlaying ? (
                        <img
                           src={gifPlaying}
                           alt="play-btn"
                           className="w-2/5 h-2/5 object-cover"
                        />
                     ) : (
                        <img
                           src={playBtn}
                           alt="play-btn"
                           className="w-full h-full object-cover"
                        />
                     )}
                  </ButtonTippy>
                  {IconRight}
               </div>
            </div>
         </div>
      </CSSTransition>
   );
};

export default memo(Image);
