import React from 'react';
import Media from '~/components/Commonts/Media';
import { BsFillPlayFill, RxDotsHorizontal } from '~/ultis/icons';
import { ButtonTippy } from '~/components/Commonts';
const Playlist = () => {
   return (
      <div className="w-full h-[90vh] flex justify-center items-center">
         <div className="w-[340px]">
            <Media>
               <Media.Left>
                  <Media.Image src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/b/8/d/5b8d31630a81ceaf4b48df7be2d66c56.jpg" />
                  {/* <Media.Card
                     title="Shelter (feat. Avril Lavigne)"
                     artistsNames="Mod Sun, Avril Lavigne"
                     releaseDate={1675357200}
                  /> */}
               </Media.Left>
               <Media.Content className="flex-1">Content</Media.Content>
               <Media.Right>
                  <ButtonTippy
                     tippyContent="Khác"
                     size="38px"
                     className="hover:bg-alpha"
                  >
                     <RxDotsHorizontal />
                  </ButtonTippy>
               </Media.Right>
            </Media>
         </div>
      </div>
   );
};

export default Playlist;
