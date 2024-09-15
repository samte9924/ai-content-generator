import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-3 shadow-sm border-b bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search />
        <input type="text" placeholder="Cerca" className="outline-none" />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary px-3 py-2 rounded-full text-sm text-white">
          🎉Passa a Premium per soli 9.99€ al mese
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
