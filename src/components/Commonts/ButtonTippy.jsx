import React, { memo } from 'react';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ButtonTippy = ({
   children,
   size = '30px',
   width = null,
   height = null,
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
            style={{
               width: width ? width : size,
               height: height ? height : size,
            }}
            className={`f-center rounded-full ${className}`}
         >
            {children}
         </button>
      </TippyComp>
   );
};

export default memo(ButtonTippy);
