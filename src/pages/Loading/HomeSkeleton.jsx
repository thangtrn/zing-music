import React from 'react';
import GallerySkeleton from '../../components/Home/GallerySkeleton';

const HomeSkeleton = () => {
   return (
      <div className="w-full min-h-screen mt-section">
         <div className="px-0 pt-8 py-5">
            <div
               style={{ height: '13vw' }}
               className="flex justify-center -mx-[15px] relative group/arrow"
            >
               <GallerySkeleton />
               <GallerySkeleton />
               <GallerySkeleton />
            </div>
         </div>
      </div>
   );
};

export default HomeSkeleton;
