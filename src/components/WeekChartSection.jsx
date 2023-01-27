import React from 'react';
import { Link } from 'react-router-dom';

const WeekChartSection = ({ weekChartData }) => {
   return (
      <div className="mt-7 mb-[30px] pt-[30px]">
         <div className="-mx-[14px] flex">
            {weekChartData.map((item, index) => (
               <WeekChartImage src={item.cover} link={item.link} key={index} />
            ))}
         </div>
      </div>
   );
};

const WeekChartImage = ({ link, src }) => {
   const linkFormat = (str) => {
      let stringReverse = '';
      for (let i = str.length - 1; i >= 0; i--) {
         stringReverse += str[i];
      }

      let idReverse = stringReverse.slice(5, 13);
      let id = '';
      for (let i = idReverse.length - 1; i >= 0; i--) {
         id += idReverse[i];
      }

      return id;
   };
   return (
      <Link to="/" className="block w-1/3 mx-[14px] cursor-pointer">
         <div className="w-full rounded h-0 pb-[28.57%] bg-loading overflow-hidden group relative">
            <img
               className="w-full absolute inset-0 object-cover group-hover:scale-110 transition-all ease-[ease] duration-700 overflow-hidden"
               src={src}
               alt="week chart"
            />
         </div>
      </Link>
   );
};

export default WeekChartSection;
