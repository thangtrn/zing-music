import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import { currentSongSelector } from '~/redux/selector';

import { ButtonTippy, Media } from '~/components/Commonts';
import { AiOutlineHeart, RxDotsHorizontal } from '~/ultis/icons';

const PlayerMedia = () => {
   const currentSong = useSelector(currentSongSelector);

   return (
      <Media className="hover:bg-transparent w-[30%] p-0 sm:flex hidden">
         <Media.Left>
            <Media.OnlyImage size="64px" src={currentSong?.thumbnailM} />
            <Media.Content className="justify-center tablet:flex hidden">
               <Media.Title className="pr-[10px] leading-[1.36] capitalize">
                  {currentSong?.title}
               </Media.Title>
               <Media.SubTitle className="mt-[1px] leading-normal">
                  {currentSong?.artistsNames}
               </Media.SubTitle>
            </Media.Content>
         </Media.Left>

         <div className="tablet:block hidden">
            <Media.Right hover={false} onClick={(e) => e.stopPropagation()}>
               <ButtonTippy
                  tippyContent="Thêm vào thư viện"
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
         </div>
      </Media>
   );
};

export default memo(PlayerMedia);
