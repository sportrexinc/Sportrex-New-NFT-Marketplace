import React from 'react'
import { useHistory } from 'react-router-dom'
const YellowBtn = ({path, name}) => {
    const history = useHistory();

  return (
    <div
      className="flex items-center justify-center text-[12px] px-10 h-[40px] md:h-auto md:text-base outline outline-yellow w-auto md:px-14 py-4 semibold font-semibold text-yellow"
      onClick={() => history.push(path)}
    >
      <p>{name}</p>
    </div>
  );
}

export default YellowBtn