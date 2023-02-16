import React, { memo, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { audioSelector, musicSelector } from '~/redux/selector';
import { setPlay, nextSong, prevSong } from '~/redux/slices/musicSlice';

import { ButtonTippy } from '~/components/Commonts';
import ProgressBar from './ProgressBar';
import {
   IoShuffleOutline,
   RiPlayMiniFill,
   RiSkipBackFill,
   RiSkipForwardFill,
   TbRepeat,
   MdOutlinePause,
} from '~/ultis/icons';
import { Loading } from '~/assets';
import { durationTime } from '~/helpers';
import { setCurrentTime, setSeek } from '~/redux/slices/audioSlice';

const Controls = () => {
   const { currentTime, duration } = useSelector(audioSelector);
   const { isPlaying, loading } = useSelector(musicSelector);
   const dispatch = useDispatch();
   const audioRef = useRef(null);

   useEffect(() => {
      audioRef.current = document.getElementById('audioPlayer');
   }, []);

   const secondToPercent = () => {
      return [(currentTime / duration) * 100 || 0];
   };

   const percentToSecond = (values) => {
      return (values[0] * duration) / 100;
   };

   const handleTogglePlay = () => {
      dispatch(setPlay());
   };

   if (loading) {
      console.log('Percent: ' + secondToPercent());
   }

   const handleNextSong = () => {
      dispatch(nextSong());
   };

   const handlePrevSong = () => {
      dispatch(prevSong());
   };

   const handleProgressChange = (values) => {
      dispatch(setSeek(true));
      var second = percentToSecond(values);
      dispatch(setCurrentTime(second));
   };

   const handleProgressFinalChange = (values) => {
      dispatch(setSeek(false));
      console.log('finalValue: ' + values);
      if (audioRef || audioRef.current) {
         audioRef.current.currentTime = (values[0] * duration) / 100;
      }
   };

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

            <ButtonTippy
               onClick={handlePrevSong}
               size={32}
               className="mx-[7px] hover:bg-[#ffffff1a]"
            >
               <RiSkipBackFill size={22} />
            </ButtonTippy>

            {loading ? (
               <ButtonTippy size={50} className="mx-[7px] group">
                  <div className="w-9 h-9 f-center border-[1.2px] border-[white] rounded-full group-hover:text-hover">
                     <Loading />
                  </div>
               </ButtonTippy>
            ) : (
               <ButtonTippy
                  size={50}
                  className="mx-[7px] group"
                  onClick={handleTogglePlay}
               >
                  <div className="w-9 h-9 f-center border-[1.2px] border-[white] rounded-full group-hover:border-purple-primary group-hover:text-hover">
                     {isPlaying ? (
                        <MdOutlinePause size={22} />
                     ) : (
                        <RiPlayMiniFill
                           size={24}
                           className="translate-x-[1px]"
                        />
                     )}
                  </div>
               </ButtonTippy>
            )}

            <ButtonTippy
               onClick={handleNextSong}
               size={32}
               className="mx-[7px] hover:bg-[#ffffff1a]"
            >
               <RiSkipForwardFill size={22} />
            </ButtonTippy>

            <ButtonTippy
               size={32}
               className="mx-[7px] hover:bg-[#ffffff1a]"
               tippyContent="Bật phát lại tất cả"
            >
               <TbRepeat size={20} />
            </ButtonTippy>
         </div>

         {/* progress bar */}
         <div className="flex items-center mb-[5px] select-none">
            <span className="min-w-[45px] text-[12px] text-primary font-medium mr-[10px] opacity-50 text-right">
               {durationTime(currentTime)}
            </span>

            <ProgressBar
               value={secondToPercent()}
               onChange={handleProgressChange}
               onFinalChange={handleProgressFinalChange}
            />

            <span className="min-w-[45px] text-[12px] text-primary font-medium ml-[10px]">
               {durationTime(duration)}
            </span>
         </div>
      </div>
   );
};

export default memo(Controls);
