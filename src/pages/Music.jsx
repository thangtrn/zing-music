import React, { useLayoutEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import zingApis from '~/axios/zingApis';

import { Loading } from '~/components';

const Music = () => {
   const params = useParams();
   const navigate = useNavigate();

   useLayoutEffect(() => {
      const fetchSongInfo = async () => {
         try {
            const res = await zingApis.getSongInfo(params.id);
            const link = res.data?.album?.link.split('.html')[0];
            // console.log(link);
            if (!link) {
               return navigate('/', { replace: true });
            }
            return navigate(link, { replace: true });
         } catch (error) {
            console.log(error);
            navigate('/', { replace: true });
         }
      };
      fetchSongInfo();
   }, [navigate, params.id]);

   return <Loading />;
};

export default Music;
