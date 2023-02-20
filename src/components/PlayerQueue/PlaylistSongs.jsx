import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomScrollBar } from '~/components/Commonts';
import { musicSelector } from '~/redux/selector';
import SongItem from './SongItem';
const PlaylistSongs = () => {
   const { playlistSongs, playlistInfo, currentSong, currentIndex } =
      useSelector(musicSelector);

   return (
      <div className="flex-1">
         <CustomScrollBar>
            <div className="px-2">
               {playlistSongs.map((item, index) => (
                  <React.Fragment key={item.encodeId}>
                     <SongItem
                        mediaData={item}
                        className={
                           index < currentIndex &&
                           'opacity-50 hover:opacity-100'
                        }
                     />

                     {index < playlistSongs.length - 1 &&
                        playlistInfo?.title &&
                        currentSong.encodeId === item.encodeId && (
                           <div class="px-2 pt-[15px] pb-[5px] text-primary text-sm">
                              <h3 class="font-bold">Tiếp theo</h3>
                              <h3 class="flex text-[#feffff99] font-normal">
                                 <span>Từ playlist</span>
                                 <Link
                                    class="block flex-1 ml-[5px] text-truncate-1 font-medium text-hover"
                                    to={playlistInfo.link}
                                 >
                                    {playlistInfo.title}
                                 </Link>
                              </h3>
                           </div>
                        )}
                  </React.Fragment>
               ))}
            </div>
         </CustomScrollBar>
      </div>
   );
};

export default PlaylistSongs;
