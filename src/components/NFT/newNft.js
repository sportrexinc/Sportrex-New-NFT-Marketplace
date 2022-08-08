import React from 'react';
import Carousel from '../Carousel/NewNftCarousel';

const NewNft = () => {
  return (
    <div className="w-full px-[12px] md:px-[64px]">
      <h1 className="grad-text text-[22px] leading-[28px]  md:text-[30px] text-center md:text-start mb-[32px] md:mb-[64px]">
        New NFTs
      </h1>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default NewNft;
