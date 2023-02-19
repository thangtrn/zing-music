import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const CustomScrollBar = ({ onScroll = () => {}, viewClass = '', children }) => {
   return (
      <Scrollbars
         onScroll={onScroll}
         autoHide
         autoHideTimeout={1000}
         autoHideDuration={200}
         style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
         }}
         renderTrackHorizontal={({ ...props }) => (
            <div
               {...props}
               className="absolute h-[6px] transition-opacity ease-[ease] opacity-0"
            ></div>
         )}
         renderTrackVertical={({ style, ...props }) => (
            <div
               {...props}
               className="absolute w-1 inset-y-[2px] right-[2px] z-[100] transition-opacity ease-[ease] opacity-0"
            ></div>
         )}
         renderThumbVertical={({ style, ...props }) => (
            <div
               {...props}
               className="relative block w-full translate-y-0 rounded-sm bg-thumb z-[100]"
            ></div>
         )}
         renderView={({ style, ...props }) => (
            <div {...props} className={`view ${viewClass}`} />
         )}
      >
         {children}
      </Scrollbars>
   );
};

export default CustomScrollBar;
