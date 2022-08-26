import React from "react";
import OwnedCard from "./OwnedCard";
const Owned = () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="w-full md:min-h-[296px] h-full grid grid-cols-2 lg:grid-cols-4 gap-[16px]   lg:gap-[32px]">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
        <OwnedCard key={index} />
      ))}
    </div>
  );
};

export default Owned;
