import React from 'react';

import Tippy from '@tippyjs/react/headless';

const TippyDropdown = ({
   children,
   placement = 'bottom-end',
   render = (attrs) => {},
}) => {
   return (
      <Tippy
         hideOnClick
         interactive
         trigger="click"
         placement={placement}
         render={render}
      >
         {children}
      </Tippy>
   );
};

export default TippyDropdown;
