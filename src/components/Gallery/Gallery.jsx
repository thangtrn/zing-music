import React, { memo, useCallback, useEffect, useState } from 'react';

import { BsChevronLeft, BsChevronRight } from '~/ultis/icons';
import GalleryItem from './GalleryItem';
import '~/styles/index.css';

const Button = ({ children, className = '', ...props }) => {
   return (
      <button
         {...props}
         className={`absolute top-1/2 -translate-y-1/2 f-center w-[55px] h-[55px] rounded-full text-primary bg-[#ffffff26] shadow-btn-arrow z-20 opacity-0 group-hover/arrow:opacity-100 hover:brightness-90 ${className}`}
      >
         {children}
      </button>
   );
};

const Gallery = ({ galleryData = [] }) => {
   const [height, setHeight] = useState(0);
   const [clss, setClss] = useState([
      'gallery-selected laptop:translate-x-0 sm:translate-x-1/2 translate-x-0 opacity-100 z-1',
      'translate-x-full laptop:opacity-100 opacity-0 z-1',
      'translate-x-[20%]',
      '',
      '-translate-x-[20%]',
      'laptop:-translate-x-full -translate-x-1/2 sm:opacity-100 opacity-0 z-1',
   ]);

   const sort = useCallback(
      (num) => {
         if (num === -1) {
            const [fist, ...rest] = clss;
            setClss([...rest, fist]);
         } else if (num === 1) {
            const tmp = clss.pop();
            setClss([tmp, ...clss]);
         }
      },
      [clss],
   );

   useEffect(() => {
      const timer = setInterval(() => sort(1), 5000);
      return () => {
         clearInterval(timer);
      };
   }, [sort]);

   // listen Event resize => update height gallery
   useEffect(() => {
      const cardEl = document.querySelector('.gallery-selected img');
      if (!cardEl) return;
      const handleResize = () => {
         setHeight(cardEl.getBoundingClientRect().height);
      };
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className="px-0 pt-8">
         <div
            style={{ height: height }}
            className="flex justify-center -mx-[15px] relative group/arrow"
         >
            <Button className="left-[25px]" onClick={() => sort(-1)}>
               <BsChevronLeft size={28} />
            </Button>

            {galleryData.map((item, idx) => (
               <GalleryItem
                  setHeight={setHeight}
                  key={idx}
                  src={item.banner}
                  className={clss[idx]}
               />
            ))}

            <Button className="right-[25px]" onClick={() => sort(1)}>
               <BsChevronRight size={28} />
            </Button>
         </div>
      </div>
   );
};

export default memo(Gallery);
