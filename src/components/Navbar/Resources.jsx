import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import {IoMdArrowDropdown} from "react-icons/io"
const Resources = () => {
    const [open, setOpen] = useState(false);
  const history = useHistory();
  const handleBlog = () => {
    history.push('/home');
    setOpen(false);
    
  }
  const handleFaq = () => {
    history.push('/faq');
    setOpen(false);

  }
  return (
    <div className="flex flex-col relative w-fit px-2">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="regular text-grey-800 text-lg">Resources</p>
        <IoMdArrowDropdown className="text-white" />
      </div>
      {open && (
        <div className="absolute w-full top-[64px] left-0 bg-blue-header p-2 flex flex-col space-y-2 ">
          <p
            to="/home"
            className="regular text-lg hover:text-yellow text-grey-800"
            onClick={handleBlog}
          >
            Blog
          </p>
          <p
            to="/faq"
            className="regular text-lg text-grey-800 hover:text-yellow"
            onClick={handleFaq}
          >
            FAQ
          </p>
        </div>
      )}
    </div>
  );
}

export default Resources
