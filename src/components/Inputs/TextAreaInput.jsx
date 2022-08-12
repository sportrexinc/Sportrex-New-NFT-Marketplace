import React from "react";


const TextAreaInput = ({ placeholder, label, name }) => {
  return (
    <div className="flex flex-col space-y-2 md:space-y-4">
      <label className="text-white semibold text-sm md:text-lg">{label}</label>
      <textarea
        className="w-full h-auto min-h-16 xl:h-[156px] p-2 bg-blue-card  rounded-lg placeholder:text-grey-800 placeholder:text-sm outline-none"
        type="text"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextAreaInput;
