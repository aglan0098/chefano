import React from "react";
import { BsFire } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";

function Community_Card() {
  return (
    <div className="md:flex justify-between items-center bg-white lg:w-[80%] m-auto rounded-3xl shadow-sm p-3 mb-5">
      <div className="flex justify-start gap-5 mb-5 md:mb-0">
        <img src="/images/community.png" />
        <div className="border-r border-amber-900"></div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-[1.1rem] text-[#646464]">مجتمع فنون الطهاة </h2>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xl text-blue-600">
              <TiArrowBack />
            </span>
            <p className="text-[#999999]">بواسطة Ahmed_Mohsen</p>
          </div>
          <p className="text-[#999999] ps-7 hidden md:flex">منذ 18 ساعة</p>
        </div>
      </div>

      <div className="md:hidden mb-5 items-center gap-1">
        <div className="flex items-center gap-2">
          <span className="text-xl text-blue-600">
            <TiArrowBack />
          </span>
          <p className="text-[#999999]">بواسطة Ahmed_Mohsen</p>
        </div>
        <p className="text-[#999999] ps-7">منذ 18 ساعة</p>
      </div>

      <div className="reactions md:flex justify-between gap-2 lg:gap-5 text-[#818181]">
        <p className="flex items-center gap-2">
          <span className="text-[#311A08]">
            <FaCommentDots />
          </span>
          عدد الردود : 92
        </p>
        <p className="flex items-center gap-2 my-3 md:my-0">
          <span>
            <BsFire className="text-main" />
          </span>
          التفاعل : قوي
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[#FF8DDF]">
            <GoHeartFill />
          </span>
          الإعجابات : 161
        </p>
      </div>
    </div>
  );
}

export default Community_Card;
