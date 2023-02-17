import React from 'react';
import './loading.css';

const Loading = () => {
   return (
      <div className="w-full h-full f-center">
         <div className="col-md-2 loader5 bg-blue-gradient">
            <div className="fingerprint-spinner">
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
            </div>
         </div>
      </div>
   );
};

export default Loading;
