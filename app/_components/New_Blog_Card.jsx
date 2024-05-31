import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

function New_Blog_Card() {
  return (
    <div className="p-5 md:p-10 rounded-3xl bg-white shadow-md m-auto">
      <img src="/images/home_banner.png" alt="" className="rounded-3xl" />

      <div className="text-center my-5">
        <h2 className="font-bold text-xl mb-4">كيك البرتقال الفريد </h2>

        <p className="lg:px-20 text-lg">
          هذا النص سوف يتم تغييرة عندما يتوفر المحتوى هذا النص سوف يتم تغييرة
          عندما يتوفر المحتوى هذا النص سوف يتم تغييرة عندما يتوفر المحتوى هذا
          النص سوف يتم تغييرة عندما يتوفر المحتوى هذا النص سوف يتم تغييرة عندما
          يتوفر المحتوى هذا النص سوف يتم تغييرة عندما يتوفر المحتوى
        </p>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <button className="text-white bg-[#FFA800] p-3 rounded-[50%] h-10 w-10 flex items-center justify-center">
          <span>
            <IoIosShareAlt className="text-2xl" />
          </span>
        </button>
        <button className="text-white bg-[#FFA800] p-3 rounded-[50%] h-10 w-10 flex items-center justify-center">
          <span>
            <FaHeart className="text-lg" />
          </span>
        </button>
        <button className="text-white bg-[#FFA800] p-2 px-4 rounded-lg">
          إقرأ المزيد ...
        </button>
      </div>
    </div>
  );
}

export default New_Blog_Card;
