import React from "react";

const YellowBtn = ({ action, name }) => {
  

  return (
    <div
      className="flex items-center justify-center text-[12px] px-2 h-[38px] md:h-auto md:text-base border-yellow border-[1px] w-full md:px-4 py-4 semibold font-semibold text-yellow hover:text-blue-body hover:bg-yellow cursor-pointer"
      onClick={action}
    >
      <p>{name}</p>
    </div>
  );
};

export default YellowBtn;
