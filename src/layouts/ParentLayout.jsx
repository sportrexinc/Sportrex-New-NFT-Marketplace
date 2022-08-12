import React from 'react'
import NormalLayout from './NormalLayout'
import { DesktopNav,MobileNavbar,Footer } from '../components'

const ParentLayout = ({children}) => {
  return (
    <div className="w-full min-h-screen h-full bg-blue-body text-white">
      <DesktopNav />
          <MobileNavbar />
          <NormalLayout>
              {children}
          </NormalLayout>
          <Footer />
    </div>
  );
}

export default ParentLayout