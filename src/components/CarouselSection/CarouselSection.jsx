import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import { BsChevronRight } from '~/ultis/icons';

const CarouselSection = ({ title, link, playlistData = [] }) => {
   return (
      <div className="w-full mt-12">
         <h3 className="mb-5 flex justify-between items-center text-xl font-bold capitalize text-primary leading-[30px]">
            {title}
            {link && (
               <Link
                  to={link} // format link
                  className="flex items-center text-xs font-medium uppercase text-secondary hover:text-hover"
               >
                  Tất cả <BsChevronRight size={18} className="ml-1" />
               </Link>
            )}
         </h3>
         <div>
            <div className="flex table:-mx-[14px] -mx-[6px] laptop:overflow-hidden overflow-x-scroll card-scroll flex-nowrap">
               {playlistData.slice(0, 5).map((item) => (
                  <Card cardData={item} key={item.encodeId} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CarouselSection;
