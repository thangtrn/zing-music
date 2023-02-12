import React, { memo } from 'react';

import { vipLabel } from '~/assets';
import { ButtonTippy, Media } from '~/components/Commonts';
import { durationTime } from '~/helpers';
import {
   AiOutlineHeart,
   RxDotsHorizontal,
   SlMusicToneAlt,
   TbMicrophone2,
} from '~/ultis/icons';

const SongItem = ({ mediaData }) => {
   const {
      encodeId,
      title,
      artistsNames,
      thumbnailM,
      streamingStatus,
      duration,
      album,
   } = mediaData;

   return (
      <div className="w-full border-b border-b-secondary relative group/media">
         <div className="absolute w-[34px] top-1/2 -translate-y-1/2 hidden group-hover/media:block">
            <label className="f-center h-[34px] leading-[1.25] cursor-pointer">
               <input
                  type="checkbox"
                  className="appearance-none rounded-[3px] border p-[6px] border-checkbox bg-transparent"
               />
            </label>
         </div>
         <Media>
            <Media.Left className="w-1/2 mr-10">
               <span className="group-hover/media:invisible w-[14px] f-center mr-10 text-secondary">
                  <SlMusicToneAlt size={13} />
               </span>

               <Media.Image size="40px" src={thumbnailM} />

               <Media.Card className={streamingStatus === 2 && 'opacity-50'}>
                  <Media.Title className="leading-normal flex items-center">
                     <span className="leading-[1.3] text-truncate-1">
                        {title}
                     </span>

                     {streamingStatus === 2 && (
                        <span className="ml-2">
                           <img
                              src={vipLabel}
                              alt="vip"
                              className="w-[26px] h-[12px]"
                           />
                        </span>
                     )}
                  </Media.Title>
                  <Media.SubTitle className="leading-[1.33]">
                     {artistsNames}
                  </Media.SubTitle>
               </Media.Card>
            </Media.Left>

            <Media.Content
               className={`${streamingStatus === 2 && 'opacity-50'} flex-1`}
            >
               <Media.SubTitle className="mt-0">{album?.title}</Media.SubTitle>
            </Media.Content>

            <Media.Right
               subChildren={
                  <Media.SubTitle className="text-xs mt-0 text-center">
                     {durationTime(duration)}
                  </Media.SubTitle>
               }
            >
               <ButtonTippy
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
                  tippyContent="Xem lời bài hát"
               >
                  <TbMicrophone2 size={14} />
               </ButtonTippy>

               <ButtonTippy
                  tippyContent="Khác"
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
               >
                  <AiOutlineHeart size={18} />
               </ButtonTippy>
               <ButtonTippy
                  tippyContent="Khác"
                  size="38px"
                  className="hover:bg-[#ffffff1a] mx-[4px]"
               >
                  <RxDotsHorizontal size={18} />
               </ButtonTippy>
            </Media.Right>
         </Media>
      </div>
   );
};

export default memo(SongItem);
