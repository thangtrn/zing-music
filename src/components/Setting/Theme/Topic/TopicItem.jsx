import React from 'react';

import { FiCheck } from '../../../../ultis/icons';

const Button = ({ primary = false, children }) => {
   return (
      <button
         className={`first:mb-[10px] block w-full text-primary text-[8px] font-medium py-[4px] border border-solid border-purple-primary rounded-[50px] ${
            primary ? 'bg-purple-primary' : 'bg-transparent'
         }`}
      >
         {children}
      </button>
   );
};

const TopicItem = ({ title, src, active = false }) => {
   return (
      <div className="w-1/6 mb-[20px]">
         <div className="px-[7px]">
            <div
               className={`group relative rounded-[5px] overflow-hidden cursor-pointer border border-solid ${
                  active ? 'border-purple-primary' : 'border-transparent'
               }`}
            >
               <img
                  src={src}
                  alt={title}
                  className="group-hover:scale-[1.1] block w-full h-full object-cover transition-all ease-linear duration-300"
               />
               {active && (
                  <div className="absolute bottom-[10px] right-[10px] w-5 h-5 f-center bg-purple-primary rounded-[50px]">
                     <FiCheck size={12} />
                  </div>
               )}
               <div className="group-hover:block hidden absolute inset-0 bg-dark-50 transition-all ease-linear duration-300">
                  <div className="w-[100px] absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                     <Button primary>Áp dụng</Button>
                     <Button>Xem trước</Button>
                  </div>
               </div>
            </div>
            <h4 className="py-[5px] text-xs font-medium leading-[1.36] text-primary capitalize">
               {title}
            </h4>
         </div>
      </div>
   );
};

export default TopicItem;
