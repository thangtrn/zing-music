import React from 'react';
import { PlayerMedia, Controls, PlayerAction } from '~/components';

const PlayerControls = () => {
   return (
      <div className="fixed inset-x-0 bottom-0 w-full h-player px-5 flex justify-between border-t border-t-primary bg-player bg-player-img bg-center bg-no-repeat bg-cover cursor-pointer z-[120]">
         <div className="w-full h-full flex items-center justify-between">
            <PlayerMedia />

            <Controls />

            <PlayerAction />
         </div>
      </div>
   );
};

export default PlayerControls;
