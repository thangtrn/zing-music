import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight } from '~/ultis/icons';

import { MediaItem } from './Commonts';

const TAGS = [
   { tagId: 'all', tagName: 'Tất cả' },
   { tagId: 'vPop', tagName: 'Việt Nam' },
   { tagId: 'others', tagName: 'Quốc tế' },
];

const NewRelease = ({ title, link, releaseData }) => {
   const [tags] = useState(TAGS);
   const [tagActive, setTagActive] = useState('all');

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
         <div className="mb-4">
            {tags.map((tag) => (
               <Button
                  key={tag.tagId}
                  active={tag.tagId === tagActive}
                  onClick={() => setTagActive(tag.tagId)}
               >
                  {tag.tagName}
               </Button>
            ))}
         </div>
         <div className="-mx-[14px] flex">
            <Column>
               {releaseData[tagActive].slice(0, 4).map((item) => (
                  <MediaItem key={item.encodeId} mediaData={item} />
               ))}
            </Column>
            <Column>
               {releaseData[tagActive].slice(4, 8).map((item) => (
                  <MediaItem key={item.encodeId} mediaData={item} />
               ))}
            </Column>
            <Column>
               {releaseData[tagActive].slice(8, 12).map((item) => (
                  <MediaItem key={item.encodeId} mediaData={item} />
               ))}
            </Column>
         </div>
      </div>
   );
};

const Column = ({ children }) => {
   return <div className="px-[14px] w-1/3">{children}</div>;
};

const Button = ({ children, active = false, ...props }) => {
   return (
      <button
         {...props}
         className={`mr-[15px] py-[4px] px-[24px] border border-solid outline-none rounded-[100px] uppercase text-xs font-normal leading-normal select-none ${
            active
               ? 'bg-purple-primary border-purple-primary'
               : 'bg-transparent border-primary '
         }`}
      >
         {children}
      </button>
   );
};

export default NewRelease;
