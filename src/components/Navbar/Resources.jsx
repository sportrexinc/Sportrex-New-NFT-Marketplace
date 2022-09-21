import React,{useState} from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
const Resources = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <div className='flex flex-col relative'>
          <div className="flex">
              <p className="regular text-grey-800">
                  Resources
              </p>
              <IoMdArrowDropdown className='text-white' />
      </div>
    </div>
  )
}

export default Resources
