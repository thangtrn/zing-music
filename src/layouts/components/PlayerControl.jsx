import React from 'react';
import { PlayerMedia, Controls } from '~/components';

const PlayerControl = () => {
   return (
      <div className="w-full h-player px-5 flex justify-between border-t border-t-primary bg-player bg-player-img bg-center bg-no-repeat bg-cover">
         <div className="w-full h-full flex items-center justify-between">
            <PlayerMedia />

            <Controls />

            <div className="w-[30%]">3</div>
         </div>
      </div>
   );
};

export default PlayerControl;
