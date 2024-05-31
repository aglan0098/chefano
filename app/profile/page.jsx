"use client";

import React from "react";
import { useState } from "react";
import Card from "../_components/Card";
import Header from "../_components/Header";

function page() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div className="p-10 md:p-20 bg-slate-100">
        <div className="tabs flex justify-center gap-12 text-md font-bold mb-14">
          <button
            className={activeTab === "profile" ? "" : "text-gray-400"}
            onClick={() => handleTabClick("profile")}
          >
            حسابي
          </button>
          <button
            className={activeTab === "courses" ? "" : "text-gray-400"}
            onClick={() => handleTabClick("courses")}
          >
            دوراتي
          </button>
        </div>

        <div className="content">
          {activeTab === "profile" && <Profile />}
          {activeTab === "courses" && <Courses />}
        </div>
      </div>
    </>
  );
}

function Profile() {
  return (
    <form className="rounded-3xl my-10 shadow-xl m-auto md:w-[90%]">
      <div
        className="relative rounded-t-3xl h-40 mb-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cover.jpg)" }}
      >
        <div className="profile absolute start-10 bottom-[-30%] rounded-full bg-slate-950 h-20 w-20">
          <img src="/images/avatar.png" alt="profile image" />
        </div>
      </div>

      <div className="py-10 px-10 lg:px-24">
        <h2 className="font-bold text-xl text-main mb-5">بيانات شخصية</h2>

        <div className="mb-5 md:flex items-center gap-20">
          <div className="md:w-1/2">
            <label htmlFor="name-ar" className="font-bold">
              الاسم الكامل
            </label>
            <input
              name="name-ar"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="name-en" className="font-bold">
              الاسم الكامل ( بالإنجليزي )
            </label>
            <input
              name="name-en"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
            />
          </div>
        </div>

        <div className="mb-5 md:flex items-center gap-20">
          <div className="md:w-1/2">
            <label htmlFor="date" className="font-bold">
              تاريخ الميلاد
            </label>
            <input
              name="date"
              type="date"
              className="h-10 px-5 text-main text-md border border-main rounded-lg w-full my-5"
            />
          </div>

          <div className="md:w-1/2">
            <label className="font-bold">الجنس</label>
            <div className="flex my-5 gap-7">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  className="accent-orange-500"
                />
                <label htmlFor="male" className="ms-2">
                  ذكر
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  className="accent-orange-500"
                />
                <label htmlFor="female" className="ms-2">
                  أنثى
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 md:flex items-center gap-20">
          <div className="md:w-1/2">
            <label htmlFor="nationality" className="font-bold">
              الجنسية
            </label>
            <select
              name="nationality"
              id="nationality"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5 bg-transparent"
            >
              <option value="" selected disabled>
                الجنسية
              </option>
              <option value="makka">السعوديه</option>
              <option value="madina">مصر</option>
              <option value="riaydh">الامارات</option>
              <option value="tabuk">قطر</option>
            </select>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="city" className="font-bold">
              المدينة
            </label>
            <select
              name="city"
              id="city"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5 bg-transparent"
            >
              <option value="" selected disabled>
                المدينة
              </option>
              <option value="makka">مكه</option>
              <option value="madina">المدينة</option>
              <option value="riaydh">الرياض</option>
              <option value="tabuk">تبوك</option>
            </select>
          </div>
        </div>

        <h2 className="font-bold text-xl text-main mb-5 mt-16">
          بيانات الحساب
        </h2>

        <div className="mb-5 md:flex gap-20">
          <div className="md:w-1/2">
            <label htmlFor="info" className="font-bold">
              نبذة عنك
            </label>
            <textarea
              name="info"
              type="text"
              className=" h-20 px-5 text-md border border-main rounded-lg w-full my-5"
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="phone" className="font-bold">
              رقم الجوال
            </label>
            <input
              name="phone"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
            />
          </div>
        </div>

        <div className="mb-5 md:flex gap-20">
          <div className="md:w-1/2">
            <label htmlFor="phone" className="font-bold">
              البريد الإلكتروني
            </label>
            <input
              name="phone"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
            />
          </div>
          <div className="md:w-1/2"></div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-main text-white py-2 px-7 rounded-xl">
            حفظ التعديلات
          </button>
        </div>
      </div>
    </form>
  );
}

function Courses() {
  return (
    <div className="lg:flex py-8 justify-end gap-5 w-[95%] md:w-[95%] xl:w-[90%] m-auto">
      <div className="filter w-[80%] m-auto mb-10 lg:m-0 lg:w-1/4 order-1 lg:order-2">
        <div className="rounded-3xl bg-white shadow-lg px-5 py-7">
          <h2 className="font-bold">التصنيف</h2>
          <hr className="my-5" />
          <ul>
            <li className="mb-2">
              <input type="checkbox" className="me-2 accent-orange-500" />
              <label>جميع الدورات</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" className="me-2 accent-orange-500" />
              <label>الدورات المجانية</label>
            </li>
            <li className="mb-2">
              <input type="checkbox" className="me-2 accent-orange-500" />
              <label>الدورات المدفوعة</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="cards m-auto md:m-0 md:3/5 lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 order-2 lg:order-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
