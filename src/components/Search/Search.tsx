import React, { FC } from "react";
import Input from "../UI/Input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search To Do"
          className="pl-10 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
          value={""}
        />
      </div>
    </div>
  );
};

export default Search;
