import React, { memo } from 'react';
import { HiSortDescending } from '~/ultis/icons';
import SongItem from './SongItem';

const SongList = ({ songsData = [] }) => {
   return (
      <div className="mb-10">
         {/* header */}
         <div className="h-[46px] p-10 flex items-center text-xs text-secondary uppercase font-medium border-b border-b-secondary">
            <div className="w-1/2 flex items-center mr-10">
               <HiSortDescending size={16} />
               <span className="ml-10">Bài hát</span>
            </div>
            <div className="flex-1">
               <span>Album</span>
            </div>
            <div className="ml-10">
               <span className="text-right">Thời gian</span>
            </div>
         </div>

         {/* List */}
         <div>
            {songsData.map((item, index) => (
               <SongItem mediaData={item} key={item.encodeId} />
            ))}
         </div>
      </div>
   );
};

export default memo(SongList);
