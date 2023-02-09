import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchHome, clearHomeData } from '~/redux/slices/appSlice';
import { appSelector } from '~/redux/selector';

import {
   Gallery,
   NewRelease,
   CarouselSection,
   Loading,
   WeekChartSection,
   ZingChartSection,
   Partner,
} from '~/components';

const Home = () => {
   const { home: homeData, loading, error } = useSelector(appSelector);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchHome());

      return () => {
         dispatch(clearHomeData());
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (loading || error) {
      return <Loading />;
   }
   return (
      <div className="w-full min-h-screen mt-section">
         {homeData.map((sectionData, index) => {
            if (sectionData.sectionType === 'banner') {
               return <Gallery galleryData={sectionData.items} key={index} />;
            } else if (sectionData.sectionType === 'playlist') {
               return (
                  <CarouselSection
                     title={sectionData.title}
                     link={sectionData.link}
                     playlistData={sectionData.items}
                     key={index}
                  />
               );
            } else if (sectionData.sectionType === 'new-release') {
               return (
                  <NewRelease
                     title={sectionData.title}
                     link={sectionData.link}
                     releaseData={sectionData.items}
                     key={index}
                  />
               );
            } else if (sectionData.sectionType === 'weekChart') {
               return (
                  <WeekChartSection
                     weekChartData={sectionData.items}
                     key={index}
                  />
               );
            } else if (sectionData.sectionType === 'RTChart') {
               return (
                  <ZingChartSection zingChartData={sectionData} key={index} />
               );
            }
            return null;
         })}

         <Partner />
      </div>
   );
};

export default Home;
