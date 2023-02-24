import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchBox, Setting } from '~/components';
import { useHistoryStack } from '~/hooks';
import { BsArrowLeft, BsArrowRight } from '~/ultis';

const Header = ({ showBg }) => {
   const navigate = useNavigate();
   const [stack, active, setActive] = useHistoryStack();

   const handleGoBack = () => {
      if (active > 0) {
         navigate(-1);
         setActive(active - 1);
      }
   };
   const handleGoForward = () => {
      if (active < stack.length) {
         navigate(1);
         setActive(active + 1);
      }
   };

   return (
      <div
         className={`w-header-small desktop:w-header h-header laptop:p-section sm:px-[29px] px-[5px] flex items-center fixed right-0 top-0 z-[99]  ${
            showBg ? 'bg-header backdrop-blur-[50px] shadow-header' : ''
         }`}
      >
         <div className="w-full flex items-center justify-center">
            <div className="flex flex-grow">
               <button
                  className="btn-navigate text-primary disabled:opacity-30 tablet:block hidden"
                  onClick={handleGoBack}
                  disabled={active === 0}
               >
                  <BsArrowLeft size={22} className="icon-left" />
               </button>
               <button
                  className="btn-navigate text-primary disabled:opacity-30 tablet:block hidden"
                  onClick={handleGoForward}
                  disabled={active === stack.length}
               >
                  <BsArrowRight size={22} className="icon-left" />
               </button>

               <SearchBox />
            </div>

            <div>
               <Setting />
            </div>
         </div>
      </div>
   );
};

export default memo(Header);
