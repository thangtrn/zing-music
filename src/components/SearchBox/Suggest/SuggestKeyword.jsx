import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { IoSearchOutline } from '../../../ultis/icons';

const SuggestKeyword = ({
   text,
   link = '',
   icon = <IoSearchOutline size={18} />,
}) => {
   return (
      <div className="rounded overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer transition-all ease-[ease] duration-200">
         <Link
            to={`/tim-kiem/tat-ca?q=${link}`}
            className="flex items-center px-[10px] py-2 hover:bg-alpha hover:text-hover"
         >
            <span className="flex items-center mr-[10px] text-secondary">
               {icon}
            </span>
            <div className="text-sm font-normal whitespace-nowrap overflow-hidden text-ellipsis">
               {text}
            </div>
         </Link>
      </div>
   );
};

export default memo(SuggestKeyword);
