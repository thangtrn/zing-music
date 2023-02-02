import React, { useState } from 'react';
import { ButtonTippy } from '~/components/Commonts';
import {
   BsTabletLandscape,
   TbMicrophone2,
   IoVolumeMediumOutline,
   BsMusicNoteList,
   BsTextareaResize,
} from '~/ultis/icons';
import ProgressBar from './ProgressBar';

const Action = () => {
   const [volume, setVolume] = useState([50]);
   return (
      <div className="flex items-center justify-end w-[30%]">
         <ButtonTippy
            size={36}
            className="mx-[2px] hover:bg-[#ffffff1a] opacity-50 cursor-not-allowed"
            tippyContent="MV"
         >
            <BsTabletLandscape size={16} />
         </ButtonTippy>

         <ButtonTippy
            size={32}
            className="mx-[2px] hover:bg-[#ffffff1a]"
            tippyContent="Xem lời bài hát"
         >
            <TbMicrophone2 size={14} />
         </ButtonTippy>

         <ButtonTippy
            size={32}
            className="mx-[2px] hover:bg-[#ffffff1a]"
            tippyContent="Xem lời bài hát"
         >
            <BsTextareaResize size={16} />
         </ButtonTippy>

         <div className="flex items-center group">
            <ButtonTippy size={32} className="mx-[2px] hover:bg-[#ffffff1a]">
               <IoVolumeMediumOutline size={20} />
            </ButtonTippy>
            <div className="w-[70px]">
               <ProgressBar
                  value={volume}
                  onChange={(values) => setVolume(values)}
               />
            </div>
         </div>

         <div className="f-center flex-grow-0 flex-shrink-0">
            <span className="h-[33px] w-[1px] bg-line mx-[20px]" />
         </div>

         <ButtonTippy
            width="28px"
            height="30px"
            className="bg-[#ffffff1a] rounded-[4px] hover:bg-[#ffffff33]"
            tippyContent="Danh sách bài hát"
         >
            <BsMusicNoteList size={16} />
         </ButtonTippy>
      </div>
   );
};

export default Action;
