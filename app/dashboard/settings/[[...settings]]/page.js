import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="flex h-full items-center justify-center p-7">
      <UserProfile />
    </div>
  );
}

export default Settings;
