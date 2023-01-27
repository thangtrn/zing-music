import React, { useState } from 'react';

import { Header, Sidebar, PlayerControl } from './components';
import { CustomScrollBar } from '../components';

const DefaultLayout = ({ children }) => {
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
         <Sidebar />
         <div className="w-main h-main">
            <CustomScrollBar onScroll={handleScroll} viewClass="p-section">
               {children}
            </CustomScrollBar>
         </div>
         <div className="fixed inset-x-0 bottom-0">
            <PlayerControl />
         </div>
      </div>
   );
};

export default DefaultLayout;
