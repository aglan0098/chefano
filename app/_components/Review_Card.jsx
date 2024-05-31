import React from "react";
import Image from "next/image";

function Review_Card() {
  return (
    <div className="card border border-amber-400 rounded-3xl shadow-md p-8 my-4 md:my-0">
      <div className="text-center lg:text-right lg:flex gap-5 items-center">
        <Image
          className="m-auto lg:m-0"
          src="/images/avatar.png"
          alt="profile_picture"
          width={85}
          height={85}
        />
        <div className="name">
          <p className="font-extrabold">خالد الصعب</p>
          <p className="text-gray-500">Khalied.Alsaab</p>
        </div>
      </div>
      <hr className="my-4" />
      <p>دورة الكوكيز جميلة واستفدت الكثير منها صراحة </p>
    </div>
  );
}

export default Review_Card;
