import React, { memo } from 'react';
import { RxDotsHorizontal } from '~/ultis/icons';
import { ButtonTippy, Media } from '~/components/Commonts';
import { timeSince } from '~/helpers';
import { vipLabel } from '~/assets/images';

// streamingStatus = 1 = Free
// streamingStatus = 2 = Vip

const MediaItem = ({ mediaData }) => {
   const {
      encodeId,
      title,
      artistsNames,
      thumbnailM,
      releaseDate,
      streamingStatus,
   } = mediaData;

   return (
      <Media>
         <Media.Left className="flex-1">
            <Media.Image src={thumbnailM} />
            <Media.Card className={streamingStatus === 2 && 'opacity-50'}>
               <Media.Title
                  className={`leading-[1.3] ${
                     streamingStatus === 2 && 'flex items-center'
                  }`}
               >
                  <span className="text-truncate-1">{title}</span>

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
               <Media.SubTitle className="leading-[18px]">
                  {timeSince(releaseDate)}
               </Media.SubTitle>
            </Media.Card>
         </Media.Left>
         <Media.Right>
            <ButtonTippy
               tippyContent="Khác"
               size="38px"
               className="hover:bg-alpha mx-[4px]"
            >
               <RxDotsHorizontal />
            </ButtonTippy>
         </Media.Right>
      </Media>
   );
};

export default memo(MediaItem);
