import React from 'react';
import './playerQueue.css';

import { CSSTransition } from 'react-transition-group';
import { PlaylistSongs, Header } from '~/components';

import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

const PlayerQueue = () => {
   const { showPlaylist } = useSelector(musicSelector);

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
               <PlaylistSongs />
            </div>
         </div>
      </CSSTransition>
   );
};

export default PlayerQueue;
