import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from './CardImage';
import { playBtn } from '~/assets/images';
import { ButtonTippy } from '~/components/Commonts';

import {
   // AiFillHeart,
   AiOutlineHeart,
   BiDotsHorizontalRounded,
} from '~/ultis/icons';

const Card = ({ cardData }) => {
   const { encodeId, link, thumbnailM, title, sortDescription, artistsNames } =
      cardData;

   // /album/Nhung-Bai-Hat-Hay-Nhat-Cua-Myra-Tran-Myra-Tran/6B7OEOW7.html
   const formatLink = (str) => {
      return str.split('.html')[0];
   };

   return (
      <div className="px-[14px] w-1/5 flex-shrink-0">
         <Link
            to={formatLink(link)}
            className="block rounded overflow-hidden cursor-pointer"
         >
            <CardImage src={thumbnailM}>
               <ButtonTippy
                  className="hover:bg-tooltip"
                  tippyContent="Thêm vào thư viện"
               >
                  <AiOutlineHeart size={20} />
               </ButtonTippy>
               <ButtonTippy
                  className="hover:brightness-90 border border-[white]"
                  size="45px"
               >
                  <img
                     src={playBtn}
                     alt="play-btn"
                     className="w-full h-full object-cover"
                  />
               </ButtonTippy>
               <ButtonTippy className="hover:bg-tooltip" tippyContent="Khác">
                  <BiDotsHorizontalRounded size={20} />
               </ButtonTippy>
            </CardImage>
         </Link>
         <div className="mt-3 text-sm">
            <h4 className="text-truncate-1 leading-[1.36] text-primary font-bold mb-1 hover:text-hover">
               <Link to={`/playlist/${encodeId}`}>{title}</Link>
            </h4>
            {sortDescription ? (
               <h3 className="text-truncate-2 leading-[1.36] text-secondary cursor-default">
                  {sortDescription}
               </h3>
            ) : (
               <h3 className="text-truncate-1 leading-[1.36] text-secondary cursor-default">
                  {artistsNames}
               </h3>
            )}
         </div>
      </div>
   );
};

export default Card;
