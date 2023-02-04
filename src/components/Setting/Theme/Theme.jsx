import React from 'react';

import { CgClose } from '~/ultis/icons';
import { Topic, TopicItem } from './Topic';
import { THEME_DATA } from '~/ultis';
import { ButtonTippy } from '~/components/Commonts';

const Theme = ({ onClose }) => {
   return (
      <div
         onClick={(e) => e.stopPropagation()}
         className="w-[70vw] max-w-[900px] flex flex-col pb-[20px]"
      >
         <div className="px-[30px] py-[22px] relative text-primary leading-[1.5]">
            <h3 className="text-2xl font-bold capitalize">Giao diện</h3>
            <ButtonTippy
               size="34px"
               tippyContent="Đóng"
               onClick={onClose}
               className="bg-transparent absolute top-[15px] right-[15px] hover:brightness-90"
            >
               <CgClose size={26} className="text-primary" />
            </ButtonTippy>
         </div>
         <div className="max-h-[50vh] min-h-[500px] px-[30px] overflow-y-scroll">
            {THEME_DATA.map((theme, idx) => (
               <Topic key={idx} title={theme.name}>
                  {theme.topics.map((topic, idx) => (
                     <TopicItem
                        key={idx}
                        title={topic.title}
                        src={topic.url}
                        active={topic.title === 'Zing Music Awards'}
                     />
                  ))}
               </Topic>
            ))}
         </div>
      </div>
   );
};

export default Theme;
