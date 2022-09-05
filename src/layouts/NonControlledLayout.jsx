import React from "react";

import { DesktopNav, MobileNavbar, Footer, ConnectedNav } from "../components";

const NonControlledLayout = ({ children, current }) => {
  return (
    <div className="w-full min-h-screen h-full bg-blue-body text-white">
      <ConnectedNav current={current} />
      <MobileNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default NonControlledLayout;
