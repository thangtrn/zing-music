import React, { useRef, useState } from 'react';

import { useOutSide } from '~/hooks';
import { Line } from '../Commonts';
import { Modal } from '../Modal';
import { Theme } from './Theme';
import { Menu, MenuItem } from './Menu';
import SettingItem from './SettingItem';

import { ThemeIcon } from '~/assets/icons';
import {
   RiVipCrown2Line,
   FiUpload,
   FiSettings,
   BiBlock,
   MdOutlineHighQuality,
   BsChevronRight,
   BsPlayCircle,
   RiVipCrownLine,
   RiVipLine,
   FiLogOut,
} from '~/ultis/icons';

const Setting = () => {
   const settingRef = useRef(null);
   const avatarRef = useRef(null);
   const [isOpenTheme, setIsOpenTheme] = useState(false);
   const [isOpenSetting, setIsOpenSetting] = useState(false);
   const [isOpenAvatar, setIsOpenAvatar] = useState(false);

   // handle click outside close menu
   useOutSide(settingRef, (e) => {
      // if menu open && menu not containt e.target => close menu
      if (isOpenSetting && !settingRef?.current?.contains(e.target)) {
         setIsOpenSetting(false);
      }
   });
   // handle click outside close profile
   useOutSide(avatarRef, (e) => {
      // if menu profile && profile not containt e.target => close profile
      if (avatarRef && !avatarRef?.current?.contains(e.target)) {
         setIsOpenAvatar(false);
      }
   });

   return (
      <div className="flex items-center ml-[10px] text-placeholder">
         <SettingItem
            tippyContent="Chủ đề"
            onClick={() => setIsOpenTheme(!isOpenTheme)}
            icon={<ThemeIcon size={20} />}
         >
            <Modal isOpen={isOpenTheme} close={() => setIsOpenTheme(false)}>
               <Theme onClose={() => setIsOpenTheme(false)} />
            </Modal>
         </SettingItem>

         <SettingItem
            tippyContent="Nâng cấp VIP"
            icon={<RiVipCrown2Line size={20} />}
         />

         <SettingItem
            ref={settingRef}
            tippyContent="Cài đặt"
            onClick={() => setIsOpenSetting(!isOpenSetting)}
            icon={<FiSettings size={18} />}
         >
            {isOpenSetting && (
               <Menu>
                  <MenuItem iconLeft={<BiBlock size={20} />}>
                     Danh sách chặn
                  </MenuItem>

                  <MenuItem
                     iconLeft={<MdOutlineHighQuality size={20} />}
                     iconRight={<BsChevronRight size={18} />}
                  >
                     Chất lượng nhạc
                  </MenuItem>

                  <MenuItem
                     iconLeft={<BsPlayCircle size={18} />}
                     iconRight={<BsChevronRight size={18} />}
                  >
                     Giao diện
                  </MenuItem>
               </Menu>
            )}
         </SettingItem>

         <SettingItem
            ref={avatarRef}
            onClick={() => setIsOpenAvatar(!isOpenAvatar)}
            icon={
               <img
                  src="https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover select-none"
               />
            }
         >
            {isOpenAvatar && (
               <Menu>
                  <MenuItem iconLeft={<RiVipCrownLine size={18} />}>
                     Nâng cấp VIP
                  </MenuItem>
                  <MenuItem iconLeft={<RiVipLine size={18} />}>
                     Mua code VIP
                  </MenuItem>
                  <MenuItem iconLeft={<FiUpload size={18} />}>Tải lên</MenuItem>
                  <Line />
                  <MenuItem iconLeft={<FiLogOut size={20} />}>
                     Đăng xuất
                  </MenuItem>
               </Menu>
            )}
         </SettingItem>
      </div>
   );
};

export default Setting;
