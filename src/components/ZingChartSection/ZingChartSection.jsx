import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { BsFillPlayFill } from '~/ultis/icons';
import { bgChart } from '~/assets/images';
import ZingMedia from './ZingMedia';
import LineChart from './LineChart';

const ZingChartSection = ({ zingChartData }) => {
   const { chart, items } = zingChartData;
   return (
      <div className="mt-12 relative p-5">
         <img
            src={bgChart}
            className="w-full h-full rounded-lg object-cover object-right-top absolute inset-0"
            alt="zing chart"
         />
         <div className="absolute rounded-lg inset-0 bg-gradient-to-b from-[#740091] to-[#2d1a4c] opacity-95"></div>
         <div className="relative flex items-center mb-5 w-full">
            <Link
               to="/"
               className="text-[28px] font-bold text-primary leading-normal"
            >
               #zingchart
            </Link>
            <button className="ml-[5px] f-center w-[28px] h-[28px] rounded-full bg-white">
               <BsFillPlayFill className="text-purple-primary" />
            </button>
         </div>

         <div className="relative flex -mx-[14px]">
            <div className="basis-5/12 px-[14px]">
               {items.slice(0, 3).map((item, index) => (
                  <div className="mb-[10px]" key={item.encodeId}>
                     <ZingMedia
                        mediaData={item}
                        percent={Math.round(
                           (item.score * 100) / +chart?.totalScore,
                        )}
                        number={index + 1}
                     />
                  </div>
               ))}
               <div className="f-center mb-[13px]">
                  <Link
                     to="/"
                     className="mt-[5px] px-[25px] py-[5px] border border-white rounded-full text-sm hover:bg-alpha"
                  >
                     Xem thêm
                  </Link>
               </div>
            </div>

            <div className="basis-7/12 px-[14px] mb-5">
               <LineChart chartData={chart} rankItems={items} />
            </div>
         </div>
      </div>
   );
};

export default memo(ZingChartSection);
