import React from 'react';
import './playerQueue.css';

import { CSSTransition } from 'react-transition-group';
import { CustomScrollBar } from '~/components';

import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

import Header from './Header';
import MediaItem from './MediaItem';

const PlayerQueue = () => {
   const { showPlaylist, playlistSongs } = useSelector(musicSelector);

   return (
      <CSSTransition
         in={showPlaylist}
         timeout={500}
         classNames="player-queue-animation"
         unmountOnExit
      >
         <div className="fixed top-0 right-0 bg-queue shadow-queue z-100">
            <div className="flex flex-col h-sidebar w-[330px]">
               <Header />
               <div className="flex-1">
                  <CustomScrollBar>
                     <div className="px-2">
                        {playlistSongs.map((item) => (
                           <MediaItem mediaData={item} key={item.encodeId} />
                        ))}
                     </div>
                  </CustomScrollBar>
               </div>
            </div>
         </div>
      </CSSTransition>
   );
};

export default PlayerQueue;
