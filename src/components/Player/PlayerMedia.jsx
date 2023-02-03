import React, { memo } from 'react';
import { ButtonTippy, Media } from '~/components/Commonts';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

const PlayerMedia = () => {
   return (
      <Media className="hover:bg-transparent w-[30%] p-0">
         <Media.Left>
            <div className="w-16 h-16 rounded overflow-hidden mr-[10px] flex-shrink-0 flex-grow-0">
               <div className="relative w-full h-0 pb-[100%] bg-loading">
                  <img
                     className="w-full h-full object-cover absolute inset-0"
                     src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/1/8/1/0181fd0a3b9bc53bfb48f7e5e3d9b080.jpg"
                     alt="media"
                  />
               </div>
            </div>
            <Media.Content className="justify-center">
               <Media.Title className="pr-[10px] leading-[1.36] capitalize">
                  Đi Đu Đưa Đi
               </Media.Title>
               <Media.SubTitle className="mt-[1px] leading-normal">
                  Bích Phương
               </Media.SubTitle>
            </Media.Content>
         </Media.Left>
         <Media.Right hover={false}>
            <ButtonTippy
               tippyContent="Khác"
               size="32px"
               className="hover:bg-[#ffffff1a] mx-[2px]"
            >
               <AiOutlineHeart size={18} />
            </ButtonTippy>
            <ButtonTippy
               tippyContent="Khác"
               size="32px"
               className="hover:bg-[#ffffff1a] mx-[2px]"
            >
               <RxDotsHorizontal size={18} />
            </ButtonTippy>
         </Media.Right>
      </Media>
   );
};

export default memo(PlayerMedia);
