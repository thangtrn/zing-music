import React, { useState } from 'react';

import { CustomScrollBar } from '~/components';
import {
   Header,
   Sidebar,
   PlayerControls,
   PlayerQueue,
} from '~/layouts/components';

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

         <PlayerQueue />

         <PlayerControls />
      </div>
   );
};

export default DefaultLayout;
