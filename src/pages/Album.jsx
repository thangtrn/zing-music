import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbum, clearAlbumData } from '~/redux/slices/appSlice';
import { appSelector } from '~/redux/selector';

import { CarouselSection, Loading, Playlist } from '~/components';

const Album = () => {
   const params = useParams();

   const {
      album: { suggest },
      loading,
      error,
   } = useSelector(appSelector);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAlbum(params.id));

      return () => {
         dispatch(clearAlbumData());
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.id]);

   if (loading || error) {
      return <Loading />;
   }
   return (
      <div className="w-full min-h-[calc(100%-115px)] mt-section pt-5">
         <Playlist />

         {suggest.map((item, index) => {
            if (item.sectionType === 'playlist') {
               return (
                  <CarouselSection
                     title={item.title}
                     link={item.link}
                     playlistData={item.items}
                     key={index}
                  />
               );
            }
            return null;
         })}

         <div className="w-full mt-[48px]"></div>
      </div>
   );
};

export default Album;
