import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

import { CustomScrollBar } from '~/components';
import {
   Header,
   Sidebar,
   PlayerControls,
   PlayerQueue,
   Audio,
} from '~/layouts/components';

const DefaultLayout = ({ children }) => {
   const { playlistSongs } = useSelector(musicSelector);

   const isEmptyPlaylist = playlistSongs.length <= 0;

   const [isShowBg, setIsShowBg] = useState(false);

   const handleScroll = (e) => {
      const scrollTop = e.target.scrollTop;
      if (scrollTop >= 20) {
         setIsShowBg(true);
      } else {
         setIsShowBg(false);
      }
   };
   return (
      <div className="flex h-screen w-full relative text-primary bg-primary bg-[length:1920px_auto] bg-no-repeat background-transition">
         <Header showBg={isShowBg} />

         <Sidebar sidebarHeight={!isEmptyPlaylist ? 'h-sidebar' : ''} />

         <div className={`w-main ${!isEmptyPlaylist ? 'h-main' : 'h-full'}`}>
            <CustomScrollBar onScroll={handleScroll} viewClass="p-section">
               {children}
            </CustomScrollBar>
         </div>

         {!isEmptyPlaylist && (
            <>
               <PlayerQueue />
               <PlayerControls />
               <Audio />
            </>
         )}
      </div>
   );
};

export default DefaultLayout;
