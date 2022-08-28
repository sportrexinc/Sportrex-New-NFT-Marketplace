import { style } from '@mui/system/Stack/createStack';
import React from 'react'
const styles = {
    container:"w-auto flex space-y-1 flex-col",
    active:"text-white regular text border-b-[3px] text-xl semibold border-[#fff] cursor-pointer py-2",
    inActive:"text-white regular text  text-xl semibold  cursor-pointer "
}
const tabs = [
  {
    name: "MyNFTS",
    id: 1,
  },
  {
    name: "Collections",
    id: 2,
  },
  {
    name: "Favourite",
    id: 3,
  },
  {
    name: "MyOffer",
    id: 4,
  },
  {
    name: "My Activities",
    id: 5,
  },

];
const ProfileTab = ({activeTab,setActiveTab}) => {
  return (
    <div className='flex justify-between h-16 px-10  items-center bg-blue-dropHeader'>
      {
        tabs.map((item, index) => {
          return (
            <p
              className={item.id === activeTab ? styles.active : styles.inActive}
              key={index} onClick={()=> setActiveTab(item.id)}
            >
              {item.name}
            </p>
          )
        })
       }
    </div>
  )
}

export default ProfileTab