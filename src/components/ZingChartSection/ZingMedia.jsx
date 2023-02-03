import React, { memo } from 'react';

// import { BsFillPlayFill } from '~/ultis/icons';
import Media from '../Commonts/Media';

const ZingMedia = ({ mediaData, percent, number }) => {
   const { encodeId, title, artistsNames, thumbnailM } = mediaData;

   return (
      <Media className="hover:bg-[#ffffff33] bg-[#ffffff12] px-[15px] rounded">
         <Media.Left className="flex-1">
            <div className="mr-[15px] f-center">
               <span
                  className={`w-[22px] text-center text-[32px] font-black leading-[1] text-transparent ${
                     number <= 3 ? 'text-stroke-' + number : 'text-stroke'
                  }`}
               >
                  {number}
               </span>
            </div>
            <Media.Image src={thumbnailM} />
            <Media.Card className="justify-center">
               <Media.Title>{title}</Media.Title>
               <Media.SubTitle>{artistsNames}</Media.SubTitle>
            </Media.Card>
         </Media.Left>
         <Media.Right hover={false}>
            <span className="text-base leading-[1.56] font-bold ml-[10px]">
               {percent}%
            </span>
         </Media.Right>
      </Media>
   );
};

export default memo(ZingMedia);
