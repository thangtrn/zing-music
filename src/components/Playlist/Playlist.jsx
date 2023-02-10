import React from 'react';

import { useSelector } from 'react-redux';
import { appSelector } from '~/redux/selector';

import Header from './Header';
import { Content } from './Content';

const Playlist = () => {
   const { album: albumData } = useSelector(appSelector);

   return (
      <div className="w-full pt-5 mb-[30px] flex">
         <Header data={albumData} />
         <Content data={albumData} />
      </div>
   );
};

export default Playlist;
