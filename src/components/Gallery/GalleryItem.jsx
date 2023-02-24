import React, { memo } from 'react';

const GalleryItem = ({ className = '', src, setHeight }) => {
   // check className and set heiht for parent container
   const autoHeight = (e) => {
      if (!className.includes('gallery-selected')) return;
      setHeight(e.target.getBoundingClientRect().height);
   };

   return (
      <div
         className={`${className} absolute top-0 laptop:w-[33.33%] sm:w-1/2 w-full py-0 laptop:px-[15px] px-3 select-none gallery-transition z-0 opacity-0`}
      >
         <div className="w-full h-0 pb-[56.25%] relative bg-loading rounded-lg overflow-hidden">
            {src && (
               <img
                  src={src}
                  alt="banner"
                  onLoad={autoHeight}
                  className="block w-full h-full object-cover absolute inset-0"
               />
            )}
         </div>
      </div>
   );
};

export default memo(GalleryItem);
