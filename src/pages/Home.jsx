import React, { useEffect } from 'react';

import { Gallery } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchHome } from '../redux/features/appSlice';
import { appSelector } from '../redux/selector';
import { PlaylistSection, Loading } from '../components';

const Home = () => {
   const {
      home: { banner, playlist },
      loading,
      error,
   } = useSelector(appSelector);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchHome());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (loading || error) {
      return <Loading />;
   }

   return (
      <div className="w-full min-h-screen mt-section">
         <Gallery galleryData={banner} />

         <PlaylistSection title={playlist.title} link={playlist.link} />
      </div>
   );
};

export default Home;
