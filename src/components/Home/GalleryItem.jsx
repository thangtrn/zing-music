import React, { memo } from 'react';

const GalleryItem = ({ className = '', src, setHeight }) => {
   // check className and set heiht for parent container
   const autoHeight = (e) => {
      if (!className.includes('gallery-selected')) return;
      setHeight(e.target.getBoundingClientRect().height);
   };

   return (
      <div
         className={`${className} absolute top-0 w-[33.33%] py-0 px-[15px] select-none gallery-transition z-0 opacity-0`}
      >
         <img
            src={src}
            alt="banner"
            onLoad={autoHeight}
            className="block rounded-lg w-full h-full object-cover"
         />
      </div>
   );
};

export default memo(GalleryItem);
