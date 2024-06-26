"use client";

import React, { useState } from "react";
import Community_Card from "../_components/Community_Card";
import Search from "../_components/Search";
import { FaPlus } from "react-icons/fa";
import Header from "../_components/Header";

function Chefs() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div>
        <div className="my-10">
          <Search />
        </div>

        <div className="my-10 px-10 text-center md:flex items-center text-md font-bold w-full md:w-4/5 lg:w-3/5 m-auto">
          <button
            className="border border-main px-12 py-2 rounded-2xl text-main hover:bg-main focus:text-white focus:bg-main hover:text-white transition-all"
            onClick={() => handleTabClick("add")}
          >
            <FaPlus className="inline me-4" />
            إضافة مجتمع جديدة
          </button>
          <button
            className={`block m-auto my-5 ${
              activeTab === "all" ? "" : "text-gray-400"
            }`}
            onClick={() => handleTabClick("all")}
          >
            جميع المجتمعات
          </button>
          <button
            className={activeTab === "myCommunities" ? "" : "text-gray-400"}
            onClick={() => handleTabClick("myCommunities")}
          >
            المجتمعات التي أنشأتها
          </button>
        </div>

        <div className="content">
          {activeTab === "add" && <AddCommunity />}
          {activeTab === "all" && <AllCommunities />}
          {activeTab === "myCommunities" && <MyCommunities />}
        </div>
      </div>
    </>
  );
}

function AddCommunity() {
  return <div>Add</div>;
}

function AllCommunities() {
  return (
    <div className="w-[90%] m-auto">
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
      <Community_Card />
    </div>
  );
}

function MyCommunities() {
  return (
    <div className="w-[90%] m-auto">
      <Community_Card />
      <Community_Card />
      <Community_Card />
    </div>
  );
}

export default Chefs;
