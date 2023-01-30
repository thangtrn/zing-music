import React from 'react';
import { PlayerMedia } from '../../components';

const PlayerControl = () => {
   return (
      <div className="w-full h-player px-5 flex justify-between border-t border-t-primary bg-player bg-player-img bg-center bg-no-repeat bg-cover">
         <div className="w-full h-full flex items-center justify-between">
            <PlayerMedia />
            <div>2</div>
            <div>3</div>
         </div>
         <audio
            className="hidden"
            autoPlay={true}
            src="https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/f1263e274f66a638ff77/1578776380345441416?authen=exp=1675266373~acl=/f1263e274f66a638ff77/*~hmac=6a4e2cea7598234316afb1638d6264c1&fs=MTY3NTA5MzU3MzM4MXx3ZWJWNnwxMDmUsIC4ODg1NTI4fDI3LjMdUngNDEdUngMjI0"
         ></audio>
      </div>
   );
};

export default PlayerControl;
