import React from "react";
import heart from "../../assets/heart.svg";
import UnlockSelect from "../Select/UnlockSelect";
import ActionBtn from "../Button/ActionBtn";
const LockedCard = () => {
  return (
    <div className="w-full h-auto rounded-[20px] bg-blue-card flex flex-col p-4 ">
      <div className="img-container relative h-auto w-full ">
        <img src={heart} alt="heart" className="w-full h-auto" />
        <p className="bg-grey-900 text-white regular text-md absolute bottom-0 right-0 p-2  rounded-br-[10px]  ">
          #547582754
        </p>
      </div>
      <div className="flex flex-col mt-[24px] space-y-2">
        <h1 className="text-xl semibold text-white leading-7 ">
          Sportrex Apes
        </h1>
        <div className="flex items-center space-x-1">
          <p className="text-grey-800 text-base semibold  ">APY</p>
          <p className="text-yellow text-md semibold ">123.56%</p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-grey-800 text-base semibold   ">
            Current Earning:
          </p>
          <p className="text-yellow text-md semibold ">0.3 SPT</p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-grey-800 text-base semibold  ">Time Left:</p>
          <p className="text-yellow text-md semibold ">123 Days Left</p>
        </div>
        <div className="pt-4">
          <ActionBtn name="Un-Stake NFT" />
        </div>
      </div>
    </div>
  );
};

export default LockedCard;
