import React, { useState } from "react";
import "./Testing.css";
import ParentLayout from "../../layouts/ParentLayout";
import animator from "../../assets/animator.png";
import { LinkBtn } from "../../components";

const options = [
  {
    title: "NFT Purchase",
    description:
      "Choose from different varieties of minted NFT assets from our NFT market place.",
    image: animator,
    imageAlt: "animator",
    name: "Go to market",
    id: 1,
    path: "/market",
  },
  {
    title: "NFT Creation",
    description:
      "Enjoy seamleess NFT creation and minting on Sportrex marketplace with low gas fee.",
    image: animator,
    imageAlt: "animator",
    name: "Mint NFT",
    id: 2,
    path: "/select-nft",
  },
  {
    title: "NFT Staking",
    description:
      "Select your preffered pool for NFT staking and earn yield return on all your staked NFT assets.",
    image: animator,
    imageAlt: "animator",
    name: "Go to vault",
    id: 3,
    path: "/vault",
  },
];
const styles = {
    active: "w-4 h-[5px] bg-blue-btn",
    inactive: "w-4 h-[5px] bg-grey-800",
}
const Testing = () => {
  const [translate, setTranslate] = useState(0);
  const handleRightTranslate = () => {
    if (translate < -400) {
      setTranslate(0);
    } else {
      setTranslate(translate - 50);
    }
  };
  const handleLeftTranslate = () => {
    if (translate === 0) {
      setTranslate(0);
    } else {
      setTranslate(translate + 50);
    }
  };

  
  return (
      <ParentLayout>
          <div className=" w-full lg:hidden overflow-x-hidden">
      <div
        className="mt-[90px]  w-[1200px] flex space-x-8  items-center   overflow-y-hidden h-full "
        style={{ transform: `translateX(${translate}px)` }}
      >
        {options.map((option, index) => (
          <div className="how-card shape-ex" key={index}>
            <div className="shape-in">
              <div className="internal">
                <div className="w-full flex py-4 lg:py-8 px-4 flex-col flow-hide ">
                  <div className="img-container">
                    <img
                      src={option.image}
                      alt={option.imageAlt}
                      className=" w-[30px] sm:w-[55px] lg:w-[80px] h-auto "
                    />
                  </div>
                  <div className="mt-2">
                    <h2 className=" text-white text-base sm:text-xl lg:text-2xl font-bold bold">
                      {option.title}
                    </h2>
                    <p className="text-white text-sm sm:text-md lg:text-lg leading-4 sm:leading-6 lg:leading-8">
                      {option.description}
                    </p>
                  </div>
                  <div className=" w-full lg:w-7/12 mt-2 lg:mt-4">
                    <LinkBtn name={option.name} path={option.path} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="w-full flex justify-center space-x-4 items-center mt-10">
              <div
                  className={translate === 0 ? styles.inactive : styles.active}
                    onClick={handleLeftTranslate}
             / >
                  
              <div
                  className={translate <= 0 ? styles.active : styles.inactive}
                  onClick={handleRightTranslate}
              />
              
      </div>

      {/* <div className=" w-[400px] max-w-[600px] overflow-x-hidden">
        <div
          className="w-[1000px] flex space-x-8"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          <div className="bg-blue-btn w-[300px] h-44 "></div>
          <div className="bg-yellow w-[300px] h-44 "></div>
          <div className="bg-white w-[300px] h-44 "></div>
        </div>
      </div> */}

      {/* <div className="control flex space-x-10">
        <button onClick={handleRightTranslate}>Left</button>
        <button onClick={handleLeftTranslate}>Righ</button>
      </div> */}
    </ParentLayout>
  );
};

export default Testing;
