import React, { memo } from 'react';
import { durationLongTime } from '~/helpers';
import Text from '../Text';
import SongList from './SongList';

const Content = ({ data }) => {
   const { encodeId, sortDescription, song } = data;

   return (
      <div className="w-full xl:ml-[30px]">
         {sortDescription && (
            <Text className="xl:block hidden text-[14px] mb-[10px] text-truncate-3 leading-[1.5!important]">
               Lời tựa <span className="text-primary">{sortDescription}</span>
            </Text>
         )}

         <SongList songsData={data?.song?.items} playlistId={encodeId} />

         <Text className="leading-[1.5!important]">
            <span className="mr-2">{song?.total} bài hát</span>•
            <span className="ml-2">
               {durationLongTime(song?.totalDuration)}
            </span>
         </Text>
      </div>
   );
};

export default memo(Content);
