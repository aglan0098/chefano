import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Search() {
  return (
    <div className="flex mb-2">
      <div className="flex justify-between items-center rounded-3xl text-yellow-600 m-auto my-5 py-2 px-5 md:w-7/12 outline-none bg-[#eaa9554a]">
        <CiSearch className="text-2xl" />
        <input
          className="focus:outline-none w-full mx-4 bg-transparent"
          type="text"
          placeholder="ابحث ..."
        />
        <IoMdClose className="text-2xl" />
      </div>
    </div>
  );
}

export default Search;
