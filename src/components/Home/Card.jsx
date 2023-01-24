import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from './CardImage';

const Card = ({ cardData }) => {
   console.log(cardData);
   const { encodeId, thumbnailM, title, sortDescription, artistsNames } =
      cardData;
   return (
      <div className="px-[14px] w-1/5 flex-shrink-0">
         <Link
            to={`/playlist/${encodeId}`}
            className="block rounded overflow-hidden"
         >
            <CardImage src={thumbnailM} />
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
