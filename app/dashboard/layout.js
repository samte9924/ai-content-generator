import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function layout({ children }) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default layout;
