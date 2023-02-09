import React, { memo, useState } from 'react';

const CardImage = ({ src, children }) => {
   const [hover, setHover] = useState(false);
   return (
      <div
         className="w-full h-0 pb-[100%] bg-loading overflow-hidden group relative"
         onMouseOver={() => setHover(true)}
         onMouseOut={() => setHover(false)}
      >
         {src && (
            <img
               className="w-full absolute inset-0 object-cover group-hover:scale-110 transition-all ease-[ease] duration-700 overflow-hidden"
               src={src}
               alt="thumb"
            />
         )}
         {hover && (
            <div className="flex items-center absolute inset-0 bg-dark-50 z-10">
               <div
                  className="w-full h-[50px] flex justify-evenly items-center"
                  onClick={(e) => e.preventDefault()}
               >
                  {children}
               </div>
            </div>
         )}
      </div>
   );
};

export default memo(CardImage);
