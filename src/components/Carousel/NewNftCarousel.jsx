import React, { useEffect } from 'react';
import { Carousel as C } from 'react-responsive-carousel';
import useResizer from '../../hooks/useResizer';
import NftCard from './NftCard';

const Carousel = () => {
  const { width, height } = useResizer();
  const isMobile = width < 768;
  useEffect(() => {});
  return (
    <C infiniteLoop showThumbs={false} showStatus={false}>
      {[0, 1, 2].map(() => (
        <div className="w-full h-full flex space-x-[32px]">
          {(isMobile ? [0, 1] : [0, 1, 2, 3]).map(() => (
            <NftCard />
          ))}
        </div>
      ))}
    </C>
  );
};

export default Carousel;
