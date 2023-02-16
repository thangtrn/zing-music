import React from 'react';
import { Range } from 'react-range';

const ProgressBar = ({ value = [0], onChange, onFinalChange }) => {
   return (
      <div className="w-full h-[15px] flex items-center group">
         <Range
            step={0.1}
            min={0}
            max={100}
            values={value}
            onChange={(values) => onChange(values)}
            // onFinalChange={(values) => onFinalChange(values)}
            onFinalChange={onFinalChange}
            renderTrack={({ props, children }) => (
               <div
                  {...props}
                  style={{
                     ...props.style,
                     backgroundImage: `linear-gradient(to right, var(--bg-progressbar-active) 0%, var(--bg-progressbar-active) ${value}%, var(--bg-progressbar-player) ${value}%, var(--bg-progressbar-player) 100%)`,
                  }}
                  className="w-full h-[3px] rounded group-hover:h-[5px]"
               >
                  {children}
               </div>
            )}
            renderThumb={({ props }) => (
               <div
                  {...props}
                  style={{
                     ...props.style,
                     cursor: 'pointer',
                  }}
                  className="w-[12px] h-[12px] invisible group-hover:visible rounded-full bg-progressbar-active outline-none"
               />
            )}
         />
      </div>
   );
};

export default ProgressBar;
