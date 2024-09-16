import React from "react";
import { Search } from "lucide-react";

function SearchSection({ onSearchInput }) {
  return (
    <div className="p-10 text-white flex flex-col justify-center items-center bg-gradient-to-br from-primary via-blue-500 to-purple-500 ">
      <h2 className="text-3xl font-bold text-center md:text-left">
        Cerca Tra Tutti i Templates
      </h2>
      <p className="mt-4">Cosa vuoi creare oggi?</p>

      <div className="w-full flex justify-center">
        <div className="flex gap-2 p-2 my-5 items-center border rounded-md bg-white w-[100%] md:w-[50%]">
          <Search className="text-primary w-6 h-6" />
          <input
            type="text"
            placeholder="Cerca"
            onChange={(e) => onSearchInput(e.target.value)}
            className="bg-transparent text-black w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
