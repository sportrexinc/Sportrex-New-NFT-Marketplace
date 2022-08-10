import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const LinkBtn = ({ path, name }) => {
    const history = useHistory();
  return (
    <div
      className="flex items-center justify-center text-[12px] md:text-base  bg-blue-btn w-auto md:px-10 md:py-4 px-4 h-[40px] md:h-auto semibold font-semibold text-white cursor-pointer"
      onClick={() => history.push(path)}
    >
      <p>{name}</p>
    </div>
  );
};

export default LinkBtn