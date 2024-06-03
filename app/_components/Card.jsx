import React from "react";
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdInsertChart } from "react-icons/md";

function Card() {
  return (
    <div
      className="relative rounded-3xl my-4 md:my-0 h-60 md:w-full bg-cover"
      style={{ backgroundImage: "url(/images/card_pic.jpeg)" }}
    >
      <div className="absolute bottom-0 w-full p-4 md:flex justify-between items-center bg-[#707070cd] backdrop-blur-custom-card rounded-3xl">
        <div>
          <h2 className="text-xl text-white">كيك بالبرتقال</h2>
          <div className="text-md text-orange-200 flex my-2 items-center">
            <span className="me-2">4.9</span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div>
          <div className="flex gap-3 justify-center text-[#ffe8d6]">
            <span className="flex items-center gap-3">
              مبتدئ
              <MdInsertChart className="text-xl" />
            </span>
            <span className=" border-e border-[#311a08e3]"></span>
            <span className="flex items-center gap-3">
              1:30 min
              <FaClock className="text-xl" />
            </span>
          </div>

          <div className="flex justify-center gap-2 mt-3 text-white">
            <button className="bg-[#73C0C5] p-2 px-4 rounded-2xl">
              80 ريال
            </button>
            <button className="bg-[#FFA800] p-2 px-5 rounded-2xl flex items-center">
              <FaPlayCircle className="me-3 text-xl" />
              إشترك
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
