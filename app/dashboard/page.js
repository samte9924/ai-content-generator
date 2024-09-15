"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateSection from "./_components/TemplateListSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState("");
  return (
    <div>
      <SearchSection onSearchInput={(value) => setUserSearchInput(value)} />
      <TemplateSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
