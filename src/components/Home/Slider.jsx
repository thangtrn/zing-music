import React from 'react';

const Slider = ({ children }) => {
   return (
      <div className="flex -mx-[14px] overflow-hidden flex-nowrap">
         {children}
      </div>
   );
};

export default Slider;
