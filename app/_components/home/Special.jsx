import React from "react";
import Card from "../Card";
import { IoRestaurantOutline } from "react-icons/io5";

function Special() {
  return (
    <div className="p-10 bg-[#FAF1E3]">
      <div className="flex items-center gap-5 md:w-[50%] m-auto mb-14">
        <div className="flex-1 border-t border-amber-900"></div>
        <h2 className="text-center font-bold text-xl text-amber-900 flex items-center gap-3">
          <span className=" bg-amber-900 rounded-full p-2">
            <IoRestaurantOutline className="text-white" />
          </span>
          وصفات مميزة
        </h2>
        <div className="flex-1 border-t border-amber-900"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:w-[60%] md:w-full lg:w-[80%] xl:w-[60%] m-auto">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Special;
