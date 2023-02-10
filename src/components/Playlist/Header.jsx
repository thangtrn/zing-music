import React, { memo } from 'react';

import { useSelector } from 'react-redux';
import { appSelector } from '~/redux/selector';

import { ButtonTippy, Image } from '~/components/Commonts';

import { formatNumber, timestampToDate } from '~/helpers';
import { AiOutlineHeart, BiDotsHorizontalRounded, IoPlay } from '~/ultis/icons';

const Header = () => {
   const { album: albumData } = useSelector(appSelector);

   return (
      <div className="h-full">
         <div className="w-[300px] sticky top-[110px]">
            <Image
               className="rounded-lg image-shadow"
               src={albumData.thumbnailM}
            />

            <div className="w-full mt-3 flex flex-col justify-center">
               <div className="text-center">
                  <h3 className="block text-xl font-bold leading-[1.5] break-words">
                     {albumData.title}
                  </h3>
                  <SubTitle>
                     Cập nhật: {timestampToDate(albumData.contentLastUpdate)}
                  </SubTitle>
                  <SubTitle>{albumData.artistsNames}</SubTitle>
                  <SubTitle>
                     {formatNumber(albumData.like)} người yêu thích
                  </SubTitle>
                  <SubTitle className="lg:hidden text-[14px] mt-4 mb-[10px]">
                     Lời tựa:{' '}
                     <span className="text-primary">
                        {albumData.sortDescription}
                     </span>
                  </SubTitle>
               </div>
            </div>

            <div className="mt-4 mx-auto w-fit">
               <button className="f-center uppercase text-primary text-[14px] font-normal leading-normal py-[8.5px] px-[23.5px] mr-[10px] mb-4 rounded-full bg-purple-primary border border-purple-primary hover:brightness-90">
                  <IoPlay size={18} />
                  <span className="ml-[4px]">Phát ngẫu nhiên</span>
               </button>

               <div className="f-center">
                  <ButtonTippy
                     size="35px"
                     className="bg-alpha mr-[10px] hover:brightness-90"
                     tippyContent="Thêm vào thư viện"
                  >
                     <AiOutlineHeart size={16} />
                  </ButtonTippy>
                  <ButtonTippy
                     size="35px"
                     className="bg-alpha mr-[10px] hover:brightness-90"
                     tippyContent="Khác"
                  >
                     <BiDotsHorizontalRounded size={18} />
                  </ButtonTippy>
               </div>
            </div>
         </div>
      </div>
   );
};

const SubTitle = ({ children, className = '' }) => {
   return (
      <div className={`text-secondary text-xs leading-[1.75] ${className}`}>
         {children}
      </div>
   );
};

export default memo(Header);
