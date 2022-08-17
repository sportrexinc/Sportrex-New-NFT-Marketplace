import React from 'react'

const Header = ({children}) => {
  return (
      <h1 className='grad-text text-[22px] md:text-3xl bold leading-[38px'>
        {children}
   </h1>
  )
}

export default Header