import React from 'react';
import { useState } from 'react';
import { ButtonTippy } from '~/components/Commonts';
import ProgressBar from '../ProgressBar';
import {
   IoShuffleOutline,
   RiPlayMiniFill,
   RiSkipBackFill,
   RiSkipForwardFill,
   TbRepeat,
   MdOutlinePause,
} from '~/ultis/icons';

const Controls = () => {
   const [play, setPlay] = useState(false);
   const [value, setValue] = useState([10]);

   return (
      <div className="flex-grow max-w-[40vw]">
         <div className="f-center">
            <ButtonTippy
               size={32}
               className="mx-[7px] hover:bg-[#ffffff1a]"
               tippyContent="Bật phát ngẫu nhiên"
            >
               <IoShuffleOutline size={20} />
            </ButtonTippy>

            <ButtonTippy size={32} className="mx-[7px] hover:bg-[#ffffff1a]">
               <RiSkipBackFill size={22} />
            </ButtonTippy>

            <ButtonTippy
               size={50}
               className="mx-[7px] group"
               onClick={() => setPlay((prev) => !prev)}
            >
               <div className="w-9 h-9 f-center border-[1.2px] border-[white] rounded-full group-hover:border-purple-primary group-hover:text-hover">
                  {play ? (
                     <MdOutlinePause size={22} />
                  ) : (
                     <RiPlayMiniFill size={24} className="translate-x-[1px]" />
                  )}
               </div>
            </ButtonTippy>

            <ButtonTippy size={32} className="mx-[7px] hover:bg-[#ffffff1a]">
               <RiSkipForwardFill size={22} />
            </ButtonTippy>

            <ButtonTippy
               size={32}
               className="mx-[7px] hover:bg-[#ffffff1a]"
               tippyContent="Bật phát laij tất cả"
            >
               <TbRepeat size={20} />
            </ButtonTippy>
         </div>

         {/* progress bar */}
         <div className="flex items-center mb-[5px] select-none">
            <span className="min-w-[45px] text-[12px] text-primary font-medium mr-[10px] opacity-50 text-right">
               02:48
            </span>
            <ProgressBar
               value={value}
               onChange={(values) => setValue(values)}
            />
            <span className="min-w-[45px] text-[12px] text-primary font-medium ml-[10px]">
               02:48
            </span>
         </div>
      </div>
   );
};

export default Controls;
