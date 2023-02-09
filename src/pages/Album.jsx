import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbum, clearAlbumData } from '~/redux/slices/appSlice';
import { appSelector } from '~/redux/selector';

import { Loading, Playlist } from '~/components';

const Album = () => {
   const params = useParams();

   const { loading, error } = useSelector(appSelector);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAlbum(params.id));

      return () => {
         dispatch(clearAlbumData());
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if (loading || error) {
      return <Loading />;
   }
   return (
      <div className="w-full min-h-[calc(100%-115px)] mt-section pt-5">
         <Playlist />
      </div>
   );
};

export default Album;
