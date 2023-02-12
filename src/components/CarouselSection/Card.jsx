import React, { memo } from 'react';

import { fetchPlaylist } from '~/redux/slices/musicSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { ButtonTippy, Image } from '~/components/Commonts';

import {
   // AiFillHeart,
   AiOutlineHeart,
   BiDotsHorizontalRounded,
} from '~/ultis/icons';

const Card = ({ cardData }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { encodeId, link, thumbnailM, title, sortDescription, artistsNames } =
      cardData;

   // /album/Nhung-Bai-Hat-Hay-Nhat-Cua-Myra-Tran-Myra-Tran/6B7OEOW7.html
   const formatLink = (str) => {
      return str.split('.html')[0];
   };

   const handleClick = () => {
      dispatch(fetchPlaylist(encodeId));
      navigate(formatLink(link));
   };

   return (
      <div className="px-[14px] w-1/5 flex-shrink-0">
         <Link
            to={formatLink(link)}
            className="block rounded overflow-hidden cursor-pointer"
         >
            <Image
               src={thumbnailM}
               onClick={handleClick}
               IconLeft={
                  <ButtonTippy
                     className="hover:bg-tooltip"
                     tippyContent="Thêm vào thư viện"
                  >
                     <AiOutlineHeart size={20} />
                  </ButtonTippy>
               }
               IconRight={
                  <ButtonTippy className="hover:bg-tooltip" tippyContent="Khác">
                     <BiDotsHorizontalRounded size={20} />
                  </ButtonTippy>
               }
            />
         </Link>
         <div className="mt-3 text-sm leading-[1.33]">
            <h4 className="text-truncate-1 leading-[1.36] text-primary font-bold mb-1 hover:text-hover">
               <Link to={`/playlist/${encodeId}`}>{title}</Link>
            </h4>
            {sortDescription ? (
               <h3 className="text-truncate-2 text-secondary cursor-default">
                  {sortDescription}
               </h3>
            ) : (
               <h3 className="text-truncate-1 text-secondary cursor-default">
                  {artistsNames}
               </h3>
            )}
         </div>
      </div>
   );
};

export default memo(Card);
