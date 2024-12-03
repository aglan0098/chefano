import Link from "next/link";
import React from "react";

function Login_First() {
  return (
    <div className="p-6 bg-white rounded-3xl my-10 shadow-md w-4/5 md:w-3/5 lg:w-2/5 m-auto">
      <h2 className="text-main font-bold mb-10 text-center text-xl md:text-2xl">
        قم بتسجيل الدخول أولاً
      </h2>

      <div className="block text-center md:flex items-center justify-center">
        <Link href="/sign-in">
          <button className="bg-[#683220] text-white py-2 px-6 sm:px-9 rounded-3xl my-3 text-[1rem] sm:text-[1.1rem]">
            تسجيل الدخول
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login_First;
