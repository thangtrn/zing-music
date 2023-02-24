import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { audioSelector, musicSelector } from '~/redux/selector';
import { setShowPlaylist } from '~/redux/slices/musicSlice';
import { setVolume, toggleVolume } from '~/redux/slices/audioSlice';

import ProgressBar from './ProgressBar';
import { ButtonTippy } from '~/components/Commonts';

import {
   BsTabletLandscape,
   TbMicrophone2,
   IoVolumeMediumOutline,
   BsMusicNoteList,
   BsTextareaResize,
   BsVolumeMute,
} from '~/ultis/icons';

const Action = () => {
   const { showPlaylist } = useSelector(musicSelector);
   const { volume } = useSelector(audioSelector);
   const dispatch = useDispatch();

   const handleToggleQueue = () => {
      dispatch(setShowPlaylist());
   };

   const handleChangeVolume = (values) => {
      const volumeValue = Math.floor(values);
      dispatch(setVolume(volumeValue));
   };

   const handleToggleVolume = () => {
      dispatch(toggleVolume());
   };

   return (
      <div className="sm:flex hidden items-center justify-end w-[30%] ">
         <div
            className="flex items-center justify-end w-fit"
            onClick={(e) => e.stopPropagation()}
         >
            <ButtonTippy
               size={36}
               className="mx-[2px] hover:bg-[#ffffff1a] opacity-50 cursor-not-allowed tablet:flex hidden"
               tippyContent="MV"
            >
               <BsTabletLandscape size={16} />
            </ButtonTippy>

            <ButtonTippy
               size={32}
               className="mx-[2px] hover:bg-[#ffffff1a] tablet:flex hidden"
               tippyContent="Xem lời bài hát"
            >
               <TbMicrophone2 size={14} />
            </ButtonTippy>

            <ButtonTippy
               size={32}
               className="mx-[2px] hover:bg-[#ffffff1a] tablet:flex hidden"
               tippyContent="Chế độ cửa sổ"
            >
               <BsTextareaResize size={16} />
            </ButtonTippy>

            <div className="flex items-center group max-[1133px]:relative">
               <ButtonTippy
                  onClick={handleToggleVolume}
                  size={32}
                  className="mx-[2px] hover:bg-[#ffffff1a]"
               >
                  {volume === 0 ? (
                     <BsVolumeMute size={20} />
                  ) : (
                     <IoVolumeMediumOutline size={20} />
                  )}
               </ButtonTippy>
               <div className="desktop:w-[70px] max-[1133px]:volume max-[1133px]:group-hover:flex max-[1133px]:hidden">
                  <ProgressBar
                     step={0.01}
                     value={volume}
                     onChange={handleChangeVolume}
                  />
               </div>
            </div>

            <div className="f-center flex-grow-0 flex-shrink-0">
               <span className="h-[33px] w-[1px] bg-line tablet:mx-[20px] mx-2" />
            </div>

            <ButtonTippy
               onClick={handleToggleQueue}
               width="28px"
               height="30px"
               className={`rounded-[4px] ${
                  showPlaylist === true
                     ? 'bg-purple-primary hover:brightness-90'
                     : 'bg-[#ffffff1a] hover:bg-[#ffffff33]'
               }`}
               tippyContent="Danh sách bài hát"
            >
               <BsMusicNoteList size={16} />
            </ButtonTippy>
         </div>
      </div>
   );
};

export default Action;
