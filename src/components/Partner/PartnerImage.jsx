import React from 'react';

const PartnerImage = ({ src, className = '' }) => {
   return (
      <div className={`px-[10px] mb-[20px] ${className}`}>
         <div className="w-full rounded-lg overflow-hidden mr-[10px] flex-shrink-0 flex-grow-0 bg-white">
            <div className="relative w-full h-0 pb-[56.25%] bg-loading">
               <div className="w-full h-full absolute inset-0 f-center">
                  <img
                     className="max-w-[90%] max-h-[80%]"
                     src={src}
                     alt="partner"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default PartnerImage;
