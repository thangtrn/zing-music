import React, { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const SettingItem = (
   {
      onClick = () => {},
      to = null,
      href = null,
      tippyContent = null,
      icon,
      children = null,
   },
   ref,
) => {
   let Comp = 'button';
   const props = {
      onClick,
   };
   if (to) {
      Comp = Link;
      props.to = to;
   } else if (href) {
      Comp = 'a';
      props.href = href;
      props.target = '_blank';
      props.rel = 'noopener noreferrer';
   }
   let TippyComp = React.Fragment;
   const settings = {};
   if (tippyContent) {
      TippyComp = Tippy;
      settings.content = (
         <span className="leading-[0] text-[11px]">{tippyContent}</span>
      );
      settings.placement = 'bottom';
      settings.arrow = true;
      settings.duration = 300;
      settings.delay = [75, 0];
   }

   return (
      <div
         className="w-10 h-10 relative rounded-full bg-alpha cursor-pointer mr-3 last:mr-0"
         ref={ref}
      >
         <TippyComp {...settings}>
            <Comp
               {...props}
               className="w-full h-full f-center text-sm rounded-full bg-transparent overflow-hidden hover:brightness-75 transition-all"
            >
               {icon}
            </Comp>
         </TippyComp>
         {children}
      </div>
   );
};

export default memo(forwardRef(SettingItem));
