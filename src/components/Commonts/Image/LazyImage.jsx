import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ src, alt, ...props }) => {
   return <LazyLoadImage src={src} alt={alt} {...props} />;
};

export default LazyImage;
