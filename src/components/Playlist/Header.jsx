import React, { memo } from 'react';

import { ButtonTippy, Image } from '~/components/Commonts';

import { formatNumber, timestampToDate } from '~/helpers';
import { AiOutlineHeart, BiDotsHorizontalRounded, IoPlay } from '~/ultis/icons';
import Text from './Text';

const Header = ({ data }) => {
   return (
      <div className="h-full sticky top-[110px]">
         <div className="w-[300px] pb-[30px]">
            <Image className="rounded-lg image-shadow" src={data.thumbnailM} />

            <div className="w-full mt-3 flex flex-col justify-center">
               <div className="text-center">
                  <h3 className="block text-xl font-bold leading-[1.5] break-words">
                     {data.title}
                  </h3>
                  <Text>
                     Cập nhật: {timestampToDate(data.contentLastUpdate)}
                  </Text>
                  <Text>{data.artistsNames}</Text>
                  <Text>{formatNumber(data.like)} người yêu thích</Text>
                  <Text className="lg:hidden text-[14px] mt-4 mb-[10px]">
                     Lời tựa:{' '}
                     <span className="text-primary">
                        {data.sortDescription}
                     </span>
                  </Text>
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

export default memo(Header);
