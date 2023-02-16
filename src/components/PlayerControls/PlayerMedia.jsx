import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

import { ButtonTippy, Media } from '~/components/Commonts';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

const PlayerMedia = () => {
   const { currentSong } = useSelector(musicSelector);

   return (
      <Media className="hover:bg-transparent w-[30%] p-0">
         <Media.Left>
            <Media.OnlyImage size="64px" src={currentSong?.thumbnailM} />
            <Media.Content className="justify-center">
               <Media.Title className="pr-[10px] leading-[1.36] capitalize">
                  {currentSong?.title}
               </Media.Title>
               <Media.SubTitle className="mt-[1px] leading-normal">
                  {currentSong?.artistsNames}
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
