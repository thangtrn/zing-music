import React from 'react';

const GallerySkeleton = () => {
   return (
      <div className="w-[33.33%] h-auto py-0 px-[15px]">
         <div className="h-full bg-[#ffffff33] rounded-lg overflow-hidden">
            <div className="w-0 h-full shadow-skeleton skeleton-animation opacity-0"></div>
         </div>
      </div>
   );
};

export default GallerySkeleton;
