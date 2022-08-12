import React from 'react'

const TextInput = ({placeholder, label, name}) => {
  return (
    <div className='flex flex-col space-y-4'>
      <label className='text-white semibold text-sm md:text-lg'>{label}</label>
      <input className='w-full p-2 bg-blue-card text-sm md:text-base  rounded-lg placeholder:text-grey-800 placeholder:text-sm' type='text' placeholder={placeholder} name={name} />
    </div>
  )
}

export default TextInput