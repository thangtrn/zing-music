import React from 'react';

import { useSelector } from 'react-redux';
import { albumSelector } from '~/redux/selector';

import Header from './Header';
import { Content } from './Content';

const Playlist = () => {
   const { playlist } = useSelector(albumSelector);

   return (
      <div className="w-full pt-5 mb-[30px] flex">
         <Header data={playlist} />
         <Content data={playlist} />
      </div>
   );
};

export default Playlist;
