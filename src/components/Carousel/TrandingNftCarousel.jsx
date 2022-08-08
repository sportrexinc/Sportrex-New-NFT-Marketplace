import React, { useEffect } from 'react';
import { Carousel as C } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { leftIconSvg, rightIconSvg } from './icons';

const Carousel = () => {
  useEffect(() => {
    setTimeout(() => {
      const prevBtn = document.querySelector('.control-arrow.control-prev');
      console.log(prevBtn);
      prevBtn.innerHTML = leftIconSvg;
      const nextBtn = document.querySelector('.control-arrow.control-next');
      nextBtn.innerHTML = rightIconSvg;
    }, 100);
  });
  return (
    <C infiniteLoop showThumbs={false} showStatus={false}>
      {[1, 2, 3].map((i) => (
        <div className="w-full min-h-[296px] h-full flex space-x-[32px]">
          {[1, 2, 3].map((i) => (
            <div className="w-full h-full bg-no-repeat bg-cover bg-blue-header rounded-[20px] p-4 flex flex-col items-start space-y-[12px]">
              <img
                className="w-[270px] h-[180px]"
                src={`/assets/images/carousel/masked.png`}
                alt=""
              />
              <p className="text-[18px] leading-[30px]">Heartcrib</p>
              <Link className="text-[#FAC744] leading-[22px]">Read more</Link>
            </div>
          ))}
        </div>
      ))}
    </C>
  );
};

export default Carousel;
