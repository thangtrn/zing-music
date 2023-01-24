import React, { useEffect } from 'react';

import { Gallery } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchHome, clearHomeData } from '../redux/features/appSlice';
import { appSelector } from '../redux/selector';
import { PlaylistSection, Loading } from '../components';

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
                  <PlaylistSection
                     title={sectionData.title}
                     link={sectionData.link}
                     playlistData={sectionData.items}
                     key={index}
                  />
               );
            }
            return null;
         })}
      </div>
   );
};

export default Home;
