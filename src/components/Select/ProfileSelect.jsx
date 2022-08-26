import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ProfileSelect = ({
  name,
  data,
  isOpen,
  setIsOpen,
  setActive,
  active,
}) => {
  const [selected, setSelected] = useState(null);
  const [options, setOptions] = useState(data);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full relative">
      <div
        className="bg-blue-card flex px-4 text-white justify-between py-3 rounded-md"
        onClick={toggleOpen}
      >
        <p>{selected ? selected.label : name}</p>
        <div className="flex items-center justify-center">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {isOpen && (
        <div className="bg-blue-header text-white rounded-md shadow-md regular text-md w-full top-12 absolute left-0 z-50">
          <div className="flex flex-col p-4">
            {options.map((option) => (
              <div
                key={option.value}
                className="flex items-center justify-between px-4 py-2 text-md regular hover:bg-blue-btn"
                onClick={() => {
                  selectOption(option);
                  setActive(option.id);
                }}
              >
                <p className="text-sm regular">{option.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSelect;
