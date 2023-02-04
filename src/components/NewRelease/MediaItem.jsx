import React, { memo } from 'react';
import { RxDotsHorizontal } from '~/ultis/icons';
import { ButtonTippy, Media } from '~/components/Commonts';
import { timeSince } from '~/helpers';

const MediaItem = ({ mediaData }) => {
   const { encodeId, title, artistsNames, thumbnailM, releaseDate } = mediaData;

   return (
      <Media>
         <Media.Left className="flex-1">
            <Media.Image src={thumbnailM} />
            <Media.Card>
               <Media.Title className="leading-[1.3]">{title}</Media.Title>
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
