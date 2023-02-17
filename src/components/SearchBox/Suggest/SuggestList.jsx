import React from 'react';

import { useSelector } from 'react-redux';
import { searchSelector } from '~/redux/selector';

import SuggestKeyword from './SuggestKeyword';
import { Line } from '~/components/Commonts';
import { IoTrendingUpSharp } from '~/ultis/icons';
import { SuggestArtist, SuggestPlaylist, SuggestSong } from './SuggestItem';

const SuggestList = ({ onClose }) => {
   const {
      recommendKeywords,
      value: searchValue,
      result: { keywords, suggestions },
   } = useSelector(searchSelector);

   if (searchValue.length <= 0) {
      return (
         <div className="w-full absolute left-0 top-full py-[13px] px-[10px] bg-secondary rounded-b-[20px] shadow-suggest text leading-[1.5]">
            <div className="overflow-y-auto max-h-search">
               <div className="font-bold text-sm px-[10px] pb-2 leading-[1.5]">
                  Đề xuất cho bạn
               </div>
               <div onClick={() => onClose((prev) => !prev)}>
                  {recommendKeywords.map(({ keyword }, idx) => (
                     <SuggestKeyword
                        key={idx}
                        text={keyword}
                        link={keyword}
                        icon={<IoTrendingUpSharp size={16} />}
                     />
                  ))}
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className="w-full absolute left-0 top-full py-[13px] px-[10px] bg-secondary rounded-b-[20px] shadow-suggest text leading-[1.5]">
         <div className="overflow-y-auto max-h-search">
            {/* title */}
            <div className="font-bold text-sm px-[10px] pb-2 leading-[1.5]">
               Từ khóa liên quan
            </div>
            {/* keywords */}
            <div onClick={() => onClose((prev) => !prev)}>
               {keywords.length > 0 &&
                  keywords.map((item, index) => (
                     <SuggestKeyword
                        key={index}
                        text={item.keyword}
                        link={item.keyword}
                     />
                  ))}
               <SuggestKeyword
                  text={
                     <>
                        Tìm kiếm
                        <span className="font-bold"> "{searchValue}"</span>
                     </>
                  }
                  link={searchValue}
               />
            </div>

            {/* suggestions */}
            {suggestions.length > 0 && (
               <>
                  <Line />
                  <div className="font-bold text-sm px-[10px] pb-2 leading-[1.5]">
                     Gợi ý kết quả
                  </div>
                  <div onClick={() => onClose((prev) => !prev)}>
                     {suggestions.map((item, index) => {
                        if (item.type === 4)
                           return <SuggestArtist data={item} key={index} />;
                        if (item.type === 3)
                           return <SuggestPlaylist data={item} key={index} />;
                        if (item.type === 1)
                           return <SuggestSong data={item} key={index} />;
                        return null;
                     })}
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default SuggestList;
