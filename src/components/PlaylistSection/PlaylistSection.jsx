import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from '../../ultis/icons';
import { Card } from './Card';

const PlaylistSection = ({ title, link, playlistData = [] }) => {
   const formatLink = (text) => {
      return text.split('.html')[0];
   };

   return (
      <div className="w-full mt-12">
         <h3 className="mb-5 flex justify-between items-center text-xl font-bold capitalize text-primary leading-[30px]">
            {title}
            {link && (
               <Link
                  to={formatLink(link)} // format link
                  className="flex items-center text-xs font-medium uppercase text-secondary hover:text-hover"
               >
                  Tất cả <BsChevronRight size={18} className="ml-1" />
               </Link>
            )}
         </h3>
         <div>
            <div className="flex -mx-[14px] overflow-hidden flex-nowrap">
               {playlistData.slice(0, 5).map((item) => (
                  <Card cardData={item} key={item.encodeId} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default PlaylistSection;
