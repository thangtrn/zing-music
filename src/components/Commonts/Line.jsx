import React from 'react';

const Line = ({ className = '' }) => {
   return (
      <div className={`w-full h-[1px] my-[10px] bg-line ${className}`}></div>
   );
};

export default Line;
