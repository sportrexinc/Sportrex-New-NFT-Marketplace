import React from 'react';
import { Link } from 'react-router-dom';
import NftCard from '../Carousel/NftCard';

const TrendingNFT = () => {
  return (
    <div className="w-full px-4 md:px-[64px] ">
      <h1 className="text-[22px] leading-[28px] font-[700]  md:text-center text-start mb-[32px] md:mb-[64px] grad-text">
        Trending NFTs
      </h1>
      <div className="w-full min-h-[296px] h-full grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[32px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <NftCard isTrending />
        ))}
      </div>
    </div>
  );
};

export default TrendingNFT;
