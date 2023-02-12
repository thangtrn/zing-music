import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

import { Header } from '~/components';

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
               <div className="flex-1"></div>
            </div>
         </div>
      </CSSTransition>
   );
};

export default PlayerQueue;
