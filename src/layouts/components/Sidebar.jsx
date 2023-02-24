import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import path from '~/routes/path';

import {
   Navbar,
   NavItem,
   NavItemV2,
   Line,
   CustomScrollBar,
} from '~/components';
import { HiOutlinePencil, AiOutlinePlus } from '~/ultis';

import {
   liveTag,
   myAlbum,
   myHistory,
   myPlaylist,
   mySong,
   // icons
   MusicBox,
   Circle,
   CircleChart,
   CircleMusic,
   CardText,
   MusicNote,
   Category,
   StarOutline,
   MV,
} from '~/assets';

const Sidebar = ({ sidebarHeight }) => {
   const [isMark, setIsMark] = useState(false);

   const handleScrollMark = (e) => {
      const scrollTop = e.target.scrollTop;
      if (scrollTop >= 50) {
         setIsMark(true);
      } else {
         setIsMark(false);
      }
   };

   return (
      <div
         className={`${sidebarHeight} desktop:w-sidebar w-sidebar-small bg-sidebar-popup desktop:bg-sidebar flex flex-col desktop:static fixed left-0-0 inset-y-0 z-40`}
      >
         <div className="w-full h-header flex items-center justify-center desktop:justify-start desktop:pr-[25px] desktop:pl-[28px]">
            <Link to="/" tabIndex={-1} className="inline-block leading-[0]">
               <div className="inline-block w-[46px] h-[46px] desktop:w-[120px] desktop:h-10 bg-logo-small desktop:bg-logo bg-center bg-no-repeat leading-[0] bg-full hover:brightness-90"></div>
            </Link>
         </div>

         <Navbar>
            <NavItem to={path.myMusic} icon={<MusicBox />}>
               Cá Nhân
            </NavItem>
            <NavItem to={path.home} icon={<Circle />}>
               Khám Phá
            </NavItem>
            <NavItem to={path.zingChart} icon={<CircleChart />}>
               #zingchart
            </NavItem>
            <NavItem icon={<CircleMusic />}>
               Radio
               <img
                  className="inline-block ml-2 w-fit"
                  src={liveTag}
                  alt="live-tag"
               />
            </NavItem>
            <NavItem icon={<CardText />}>Theo Dõi</NavItem>
         </Navbar>

         <Line className="w-[80%] mx-auto my-0" />

         <div className="flex-1">
            <CustomScrollBar
               onScroll={handleScrollMark}
               viewClass={`mb-[0!important] mt-[10px] ${isMark ? 'mark' : ''}`}
            >
               <Navbar className="pt-[5px] mb-0">
                  <NavItem to={path.newMusic} icon={<MusicNote />}>
                     Nhạc Mới
                  </NavItem>
                  <NavItem to={path.category} icon={<Category />}>
                     Thể Loại
                  </NavItem>
                  <NavItem to={path.top100} icon={<StarOutline />}>
                     Top 100
                  </NavItem>
                  <NavItem to={path.mv} icon={<MV />}>
                     MV
                  </NavItem>
               </Navbar>

               <div className="hidden desktop:block my-[10px] mx-5 py-[15px] px-2 text-xs font-bold text-center text-primary bg-linear rounded-lg">
                  <p className="leading-[1.67] mb-[10px]">
                     Nghe nhạc không quảng cáo cùng kho nhạc VIP
                  </p>
                  <Link
                     to="/"
                     className="inline-block text-center uppercase leading-normal font-bold py-[7px] px-[36px] rounded-full bg-[#ffdb00] text-black transition-all duration-200 ease-[ease] hover:brightness-[0.8]"
                  >
                     Nâng cấp VIP
                  </Link>
               </div>

               <div className="pt-[15px] group/pen">
                  <div className="h-[26px] hidden desktop:flex items-center justify-between mt-0 mx-7 mb-2 text-xs font-bold uppercase text-primary">
                     Thư viện
                     <Tippy
                        content={
                           <span className="leading-[0] text-[11px]">
                              Chỉnh sửa
                           </span>
                        }
                        placement="top"
                        arrow={true}
                        duration={300}
                        delay={[75, 0]}
                     >
                        <button className="group-hover/pen:flex hidden w-[26px] h-[26px] justify-center items-center bg-transparent text-primary rounded-[50px] transition-all duration-200 ease-[ease] hover:bg-alpha">
                           <HiOutlinePencil size={16} />
                        </button>
                     </Tippy>
                  </div>

                  <Navbar>
                     <NavItemV2
                        to={path.myMusic}
                        icon={
                           <img className="h-5 w-5" src={mySong} alt="icon" />
                        }
                     >
                        Bài hát
                     </NavItemV2>
                     <NavItemV2
                        to={path.myMusic}
                        icon={
                           <img
                              className="h-5 w-5"
                              src={myPlaylist}
                              alt="icon"
                           />
                        }
                     >
                        Playlist
                     </NavItemV2>
                     <NavItemV2
                        to={path.myMusic}
                        icon={
                           <img className="h-5 w-5" src={myAlbum} alt="icon" />
                        }
                     >
                        Album
                     </NavItemV2>
                     <NavItemV2
                        to={path.myMusic}
                        icon={
                           <img
                              className="h-5 w-5"
                              src={myHistory}
                              alt="icon"
                           />
                        }
                     >
                        Gần đây
                     </NavItemV2>
                  </Navbar>
               </div>
            </CustomScrollBar>
         </div>

         <div className="w-full hidden desktop:block">
            <button className="w-full h-[54px] flex items-center py-0 px-7 text-sm font-bold bg-transparent text-primary hover:text-placeholder border-t border-primary">
               <span className="block w-[18px] h-[18px] mr-[10px] f-center">
                  <AiOutlinePlus size={20} />
               </span>
               Tạo playlist mới
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
