import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

import { BsFillPlayFill } from '../../ultis/icons';
import { bgChart } from '../../assets/images';
import ZingMedia from './ZingMedia';

const ZingChartSection = ({ zingChartData }) => {
   const [data, setData] = useState(null);
   const { chart, items } = zingChartData;

   return (
      <div
         className="mt-12 rounded-lg overflow-hidden relative h-[414px]"
         style={{ background: `url(${bgChart})` }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-[#740091] to-[#2d1a4c] opacity-95 p-5 ">
            <div className="flex items-center mb-5 w-full">
               <Link to="/" className="text-[28px] font-bold text-primary">
                  #zingchart
               </Link>
               <button className="ml-[5px] f-center w-[28px] h-[28px] rounded-full bg-white">
                  <BsFillPlayFill className="text-purple-primary" />
               </button>
            </div>

            <div className="flex -mx-[14px]">
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
                  <div className="f-center">
                     <Link
                        to="/"
                        className="mt-[5px] px-[25px] py-[5px] border border-white rounded-full text-sm hover:bg-alpha"
                     >
                        Xem thêm
                     </Link>
                  </div>
               </div>
               <div className="basis-7/12 px-[14px]">
                  {/* {data && <Line data={data} options={options} />} */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default memo(ZingChartSection);
