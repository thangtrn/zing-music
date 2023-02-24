import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { musicSelector } from '~/redux/selector';

import { PlayerMedia, Controls, PlayerAction } from '~/components';

const PlayerControls = () => {
   const navigate = useNavigate();
   const { playlistInfo } = useSelector(musicSelector);

   return (
      <div className="fixed inset-x-0 bottom-0 w-full h-player tablet:px-5 px-2 flex justify-between border-t border-t-primary bg-player bg-player-img bg-center bg-no-repeat bg-cover cursor-pointer z-[120]">
         <div
            onClick={() => navigate(playlistInfo?.link)}
            className="w-full h-full flex items-center justify-between"
         >
            <PlayerMedia />

            <Controls />

            <PlayerAction />
         </div>
      </div>
   );
};

export default PlayerControls;
