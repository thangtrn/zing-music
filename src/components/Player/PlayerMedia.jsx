import React from 'react';
import { ButtonTippy } from '../Commonts';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

const PlayerMedia = () => {
   return (
      <div className="w-[30%] flex items-center">
         <div className="w-16 h-16 rounded overflow-hidden mr-[10px] flex-shrink-0 flex-grow-0">
            <div className="relative w-full h-0 pb-[100%]">
               <img
                  className="w-full h-full object-cover absolute inset-0"
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/e/b/eb2ac526a66a6318a83e12e5d9e51ae7_1390454815.jpg"
                  alt="media"
               />
            </div>
         </div>

         <div className="text-xs cursor-default">
            <h3 className="w-full pr-[10px] text-truncate-1 text-sm text-primary leading-[1.36] font-medium hover:text-hover capitalize">
               Ngày Xuân Long Phụng Sum Vầy (Version Giáp Ngọ )
            </h3>
            <h4 className="w-full text-truncate-1 mt-[1px] text-secondary leading-normal">
               Phạm Quỳnh Anh, BigDaddy
            </h4>
         </div>

         <div className="flex ml-[10px]">
            <div className="px-[2px]">
               <ButtonTippy
                  tippyContent="Khác"
                  size="32px"
                  className="hover:bg-[#ffffff1a]"
               >
                  <AiOutlineHeart size={18} />
               </ButtonTippy>
            </div>
            <div className="px-[2px]">
               <ButtonTippy
                  tippyContent="Khác"
                  size="32px"
                  className="hover:bg-[#ffffff1a]"
               >
                  <RxDotsHorizontal size={18} />
               </ButtonTippy>
            </div>
         </div>
      </div>
   );
};

export default PlayerMedia;
