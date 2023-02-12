import React from 'react';

import { TfiAlarmClock, RxDotsHorizontal } from '~/ultis/icons';
import { ButtonTippy } from '~/components/Commonts';

const Button = ({ children, active = false, ...props }) => {
   return (
      <div
         {...props}
         className={`f-center flex-grow flex-shrink-0 py-[5px] rounded-full ${
            active
               ? 'bg-tag-active text-primary font-medium'
               : 'text-navigation hover:text-primary font-normal'
         }`}
      >
         <h6 className="text-xs select-none cursor-pointer">{children}</h6>
      </div>
   );
};

const Header = () => {
   return (
      <div className="flex items-center justify-between py-[14px] px-2">
         <div className="flex flex-1 p-[3px] bg-alpha rounded-full">
            <Button active>Danh sách phát</Button>
            <Button>Nghe gần đây</Button>
         </div>
         <div className="f-center">
            <ButtonTippy
               tippyContent="Hẹn giờ dừng phát nhạc"
               size="32px"
               className="bg-alpha ml-2 my-[5px] hover:brightness-90"
            >
               <TfiAlarmClock size={16} />
            </ButtonTippy>
            <ButtonTippy
               tippyContent="Khác"
               size="32px"
               className="bg-alpha ml-2 my-[5px] hover:brightness-90"
            >
               <RxDotsHorizontal size={18} />
            </ButtonTippy>
         </div>
      </div>
   );
};

export default Header;
