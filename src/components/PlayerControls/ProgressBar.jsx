import React from 'react';
import { Range } from 'react-range';

const ProgressBar = ({
   value = 0,
   onChange = () => {},
   onFinalChange = () => {},
}) => {
   const fixedValue = value.toFixed(6);

   return (
      <div className="w-full h-[15px] flex items-center group">
         <Range
            step={0.000001}
            min={0}
            max={100}
            values={[fixedValue]}
            onChange={(values) => onChange(values[0])}
            onFinalChange={(values) => onFinalChange(values[0])}
            renderTrack={({ props, children }) => (
               <div
                  {...props}
                  style={{
                     ...props.style,
                     backgroundImage: `linear-gradient(to right, var(--bg-progressbar-active) 0%, var(--bg-progressbar-active) ${fixedValue}%, var(--bg-progressbar-player) ${fixedValue}%, var(--bg-progressbar-player) 100%)`,
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
