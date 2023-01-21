import React from 'react';

const Topic = ({ title, children }) => {
   return (
      <>
         <div className="text-lg font-bold capitalize mb-[10px]">{title}</div>
         <div className="flex flex-wrap -mx-[7px]">{children}</div>
      </>
   );
};

export default Topic;
