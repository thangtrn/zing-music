import React from 'react';

import { useDispatch } from 'react-redux';
import { clearPlaylistSongs } from '~/redux/slices/musicSlice';
import { resetAudio } from '~/redux/slices/audioSlice';

import { ButtonTippy } from '~/components/Commonts';
import { Menu, MenuItem, TippyDropdown } from '~/components/Menu';

import {
   TfiAlarmClock,
   RxDotsHorizontal,
   SlTrash,
   BsDownload,
   IoAddCircleOutline,
   BsChevronRight,
} from '~/ultis/icons';

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
   const dispatch = useDispatch();

   const handleClearPlaylistSong = () => {
      dispatch(resetAudio());
      dispatch(clearPlaylistSongs());
   };
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

            <TippyDropdown
               render={(attrs) => (
                  <Menu {...attrs}>
                     <MenuItem
                        onClick={handleClearPlaylistSong}
                        iconLeft={
                           <span className="mr-[5px]">
                              <SlTrash size={16} />
                           </span>
                        }
                        className="py-[10px!important] px-[15px!important] text-sm leading-normal text-[#dadada]"
                     >
                        Xoá danh sách bài hát
                     </MenuItem>
                     <MenuItem
                        iconLeft={
                           <span className="mr-[5px]">
                              <BsDownload size={16} />
                           </span>
                        }
                        className="py-[10px!important] px-[15px!important] text-sm leading-normal text-[#dadada]"
                     >
                        Tải danh sách phát
                     </MenuItem>
                     <MenuItem
                        iconLeft={
                           <span className="mr-[5px]">
                              <IoAddCircleOutline size={16} />
                           </span>
                        }
                        iconRight={<BsChevronRight size={16} />}
                        className="py-[10px!important] px-[15px!important] text-sm leading-normal text-[#dadada]"
                     >
                        Tải danh sách phát
                     </MenuItem>
                  </Menu>
               )}
            >
               <span>
                  <ButtonTippy
                     tippyContent="Khác"
                     size="32px"
                     className="bg-alpha ml-2 my-[5px] hover:brightness-90"
                  >
                     <RxDotsHorizontal size={18} />
                  </ButtonTippy>
               </span>
            </TippyDropdown>
         </div>
      </div>
   );
};

export default Header;
