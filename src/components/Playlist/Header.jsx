import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylist, setPlay } from '~/redux/slices/musicSlice';
import { musicSelector } from '~/redux/selector';

import { ButtonTippy, Image } from '~/components/Commonts';
import { formatNumber, timestampToDate } from '~/helpers';
import {
   AiOutlineHeart,
   BiDotsHorizontalRounded,
   IoPlay,
   IoIosPause,
} from '~/ultis/icons';
import Text from './Text';

const Header = ({ data }) => {
   const params = useParams();
   const dispatch = useDispatch();
   const { loading, isPlaying, playlistId } = useSelector(musicSelector);

   const {
      encodeId,
      title,
      artistsNames,
      sortDescription,
      thumbnailM,
      like,
      contentLastUpdate,
   } = data;

   const isPlayingSong = !loading && isPlaying && playlistId === params.id;

   const handleClick = () => {
      // neu dang load thi ko cho bam
      if (loading) return;
      if (params.id === playlistId) dispatch(setPlay());
      else dispatch(fetchPlaylist(encodeId));
   };

   return (
      <div className="xl:h-full xl:sticky top-[110px]">
         <div className="xl:w-[300px] w-full xl:block sm:flex block pb-[30px]">
            <div className="xl:w-[300px] xl:mr-0 sm:mx-0 sm:mr-5 mx-auto w-[200px] sm:mb-0 mb-2">
               <Image
                  isPlaying={isPlayingSong}
                  isRotate
                  onClick={handleClick}
                  className="shadow-image"
                  src={thumbnailM}
               />
            </div>

            <div className="flex-1 xl:block flex flex-col justify-between">
               <div className="w-full xl:mt-3 flex flex-col justify-center">
                  <div className="xl:text-center sm:text-left text-center">
                     <h3 className="block text-xl font-bold leading-[1.5] break-words">
                        {title}
                     </h3>
                     <Text>Cập nhật: {timestampToDate(contentLastUpdate)}</Text>
                     <Text>{artistsNames}</Text>
                     <Text>{formatNumber(like)} người yêu thích</Text>
                     <Text className="xl:hidden tablet:block hidden text-[14px] mt-4 laptop:mb-[10px] leading-[1.5!important]">
                        Lời tựa{' '}
                        <span className="text-primary">{sortDescription}</span>
                     </Text>
                  </div>
               </div>

               <div className="mt-4 xl:mx-auto sm:mx-0 mx-auto w-fit xl:block tablet:flex tablet:items-center block">
                  <button
                     // neu dang load thi ko cho bam
                     onClick={handleClick}
                     className="f-center uppercase text-primary text-[14px] font-normal leading-normal py-[8.5px] px-[23.5px] mr-[10px] xl:mb-4 tablet:mb-0 mb-4 rounded-full bg-purple-primary border border-purple-primary hover:brightness-90"
                  >
                     {playlistId !== encodeId ? (
                        <>
                           <IoPlay size={18} />
                           <span className="ml-[4px]">Phát tất cả</span>
                        </>
                     ) : (
                        <>
                           {isPlaying ? (
                              <IoIosPause size={18} />
                           ) : (
                              <IoPlay size={18} />
                           )}
                           <span className="ml-[4px]">
                              {isPlaying ? 'Tạm dừng' : 'Tiếp tục phát'}
                           </span>
                        </>
                     )}
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
      </div>
   );
};

export default memo(Header);
