import React from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ButtonTippy = ({
   children,
   size = '30px',
   tippyContent = null,
   className = '',
   ...props
}) => {
   let TippyComp = React.Fragment;
   const settings = {};
   if (tippyContent) {
      TippyComp = Tippy;
      settings.content = (
         <span className="leading-[0] text-[11px]">{tippyContent}</span>
      );
      settings.placement = 'top';
      settings.arrow = true;
      settings.duration = 300;
      settings.delay = [75, 0];
   }

   return (
      <TippyComp {...settings}>
         <button
            {...props}
            style={{ width: size, height: size }}
            className={`f-center rounded-full hover:brightness-90 ${
               tippyContent ? 'hover:bg-tooltip' : 'border border-[white]'
            } ${className}`}
         >
            {children}
         </button>
      </TippyComp>
   );
};

export default ButtonTippy;
