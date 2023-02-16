import React, { memo } from 'react';
import { durationLongTime } from '~/helpers';
import Text from '../Text';
import SongList from './SongList';

const Content = ({ data }) => {
   return (
      <div className="w-full ml-[30px]">
         <Text className="text-[14px] mb-[10px] text-truncate-3 leading-[1.5!important]">
            Lời tựa <span className="text-primary">{data.sortDescription}</span>
         </Text>

         <SongList songsData={data?.song?.items} playlistId={data?.encodeId} />

         <Text className="leading-[1.5!important]">
            <span className="mr-2">{data?.song?.total} bài hát</span>•
            <span className="ml-2">
               {durationLongTime(data?.song?.totalDuration)}
            </span>
         </Text>
      </div>
   );
};

export default memo(Content);
