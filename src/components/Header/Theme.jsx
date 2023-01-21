import React from 'react';
import Tippy from '@tippyjs/react';

import { CgClose } from '../../ultis/icons';
import TopicItem from './TopicItem';
import Topic from './Topic';
import { THEME_DATA } from '../../ultis';

const Theme = ({ onClose }) => {
   return (
      <div
         onClick={(e) => e.stopPropagation()}
         className="w-[70vw] max-w-[900px] flex flex-col pb-[20px]"
      >
         <div className="px-[30px] py-[20px] relative text-primary leading-[1.5]">
            <h3 className="text-2xl font-bold capitalize">Giao diện</h3>
            <Tippy
               content={<span className="leading-[0] text-[11px]">Đóng</span>}
               placement="top"
               arrow={true}
               duration={300}
               delay={[75, 0]}
            >
               <button
                  onClick={onClose}
                  className="w-[34px] h-[34px] f-center bg-transparent absolute top-[15px] right-[15px]"
               >
                  <CgClose size={26} className="text-primary" />
               </button>
            </Tippy>
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
