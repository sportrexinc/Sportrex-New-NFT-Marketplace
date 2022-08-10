import React from 'react';

const ActionBtn = ({ action, name, className = '' }) => {
  return (
    <div
      className={`flex items-center w-auto text-[16px] light bg-blue-btn text-white px-4 py-2 cursor-pointer semibold ${className}`}
      onClick={action}
    >
      {name}
    </div>
  );
};

export default ActionBtn;
