import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

function Blog_Card() {
  return (
    <div className="py-8 px-3 rounded-2xl shadow-xl bg-white text-center mb-8 md:mb-0">
      <img
        src="images/card_pic.jpeg"
        alt="blog_pic"
        className="rounded-[30px] px-5"
      />

      <h2 className=" my-8 font-bold">كيفية العمل مع فريق</h2>

      <div className="flex justify-center gap-3 items-center">
        <button className="text-white bg-[#FFA800] p-3 rounded-[50%] h-10 w-10">
          <IoIosShareAlt />
        </button>
        <button className="text-white bg-[#FFA800] p-3 rounded-[50%] h-10 w-10">
          <FaHeart />
        </button>
        <button className="text-white bg-[#FFA800] p-2 px-4 rounded-lg">
          إقرأ المزيد ...
        </button>
      </div>
    </div>
  );
}

export default Blog_Card;
