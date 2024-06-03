"use client";

import React from "react";
import { useState } from "react";
import New_Blog_Card from "../_components/New_Blog_Card";
import Blog_Card from "../_components/Blog_Card";
import { FaPlus } from "react-icons/fa";
import Header from "../_components/Header";
import { HiUserGroup } from "react-icons/hi2";
import Search from "../_components/Search";
import { PiNotePencilDuotone } from "react-icons/pi";

function blog() {
  const [activeTab, setActiveTab] = useState("add");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div className="bg-custom-gradient">
        <div className="pt-10 pb-0">
          <Search />
        </div>
        <div className="my-10 px-10 text-center md:flex items-center text-md font-bold w-full md:w-4/5 lg:w-3/5 m-auto">
          <button
            className="border border-main px-10 py-2 rounded-2xl text-main hover:bg-main focus:text-white focus:bg-main hover:text-white transition-all"
            onClick={() => handleTabClick("add")}
          >
            <FaPlus className="inline me-4" />
            إضافة مدونة جديدة
          </button>
          <button
            className={`block m-auto my-5 ${
              activeTab === "all" ? "" : "text-gray-400"
            }`}
            onClick={() => handleTabClick("all")}
          >
            جميع المدونات
          </button>
          <button
            className={activeTab === "myBlogs" ? "" : "text-gray-400"}
            onClick={() => handleTabClick("myBlogs")}
          >
            المدونات التي أنشأتها
          </button>
        </div>

        <div className="content p-10 md:px-28 md:py-4">
          {activeTab === "add" && <AddBlog />}
          {activeTab === "all" && <AllBlogs />}
          {activeTab === "myBlogs" && <MyBlogs />}
        </div>
      </div>
    </>
  );
}

function AddBlog() {
  return (
    <div className="lg:mx-10">
      <h2 className="text-2xl text-header font-extrabold flex items-center gap-3">
        <span className="bg-amber-900 rounded-full p-2">
          <PiNotePencilDuotone className="text-white" />
        </span>
        أكتب مدونة
      </h2>

      <form className="p-8 bg-white rounded-3xl my-10 shadow-slate-300 shadow-md m-auto">
        <div className="mb-10">
          <label htmlFor="title" className="block text-main mb-4 font-bold">
            أضف عنوان المدونة :
          </label>
          <input
            type="text"
            placeholder="أكتب هنا عنوان المدونة ..."
            className="p-5 text-sm border border-main rounded-lg w-full h-8"
          />
        </div>

        <div className="mb-10">
          <label htmlFor="title" className="block text-main mb-4 font-bold">
            محتوى المدونة :
          </label>
          <textarea
            placeholder="أكتب هنا محتوى المدونة ..."
            className="p-4 text-sm border border-main rounded-lg w-full overflow-hidden h-[200px]"
          />
        </div>
        <div className="block text-center md:flex lg:w-[55%] items-center justify-between">
          <p className="text-main mb-5 md:mb-0 font-bold">
            سيستغرق نشر المدونة عدة أيام{" "}
          </p>
          <button className=" bg-main text-white py-1 px-10 rounded-xl">
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
}

function AllBlogs() {
  return (
    <div className="mx-3 lg:mx-20">
      <h2 className="text-xl font-bold text-amber-900 mb-10 flex items-center gap-3">
        <span className="bg-amber-900 rounded-full p-2">
          <HiUserGroup className="text-white" />
        </span>
        المدونات الحديثة
      </h2>

      <New_Blog_Card />

      <h2 className="text-xl font-bold text-amber-900 my-10 flex items-center gap-3">
        <span className="bg-amber-900 rounded-full p-2">
          <HiUserGroup className="text-white" />
        </span>
        جميع المدونات
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] m-auto md:w-full">
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
      </div>
    </div>
  );
}

function MyBlogs() {
  return (
    <div className="md:m-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
        <Blog_Card />
      </div>
    </div>
  );
}

export default blog;
