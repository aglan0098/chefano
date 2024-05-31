import React from "react";
import Header from "../_components/Header";

function sell() {
  return (
    <>
      <Header />
      <div className="p-5 md:p-28 bg-slate-300">
        <h2 className="text-2xl font-extrabold text-header">بيع دوراتك معنا</h2>

        <form className="p-8 bg-white rounded-3xl my-10 shadow-md m-auto">
          <div className="mb-10">
            <label htmlFor="title" className="block text-main mb-4 font-bold">
              أضف عنوان الدورة :
            </label>
            <input
              type="text"
              placeholder="أكتب هنا عنوان المدونة ..."
              className="p-5 text-sm border border-main rounded-lg w-full h-8"
            />
          </div>

          <div className="mb-10">
            <label htmlFor="title" className="block text-main mb-4 font-bold">
              محتوى الدورة :
            </label>
            <textarea
              placeholder="أكتب هنا محتوى المدونة ..."
              className="p-4 text-sm border border-main rounded-lg w-full overflow-hidden h-[200px]"
            />
          </div>

          <div className="mb-10 md:flex items-center gap-10 lg:gap-48">
            <div className="md:w-1/2">
              <label htmlFor="content" className="font-bold">
                رفع الدورة :
              </label>
              <input
                name="content"
                type="file"
                className="p-5 text-sm border border-main rounded-lg w-full h- my-5"
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="level" className="font-bold">
                مستوى الدورة :
              </label>
              <select
                name="level"
                id="level"
                className="p-5 text-sm border border-main rounded-lg w-full my-5 bg-transparent"
              >
                <option value="" selected disabled>
                  اختر
                </option>
                <option value="beginner">مبتدئ</option>
                <option value="intermediate">متوسط</option>
                <option value="advanced">متقدم</option>
              </select>
            </div>
          </div>

          <div className="mb-10 md:flex items-center gap-10 lg:gap-48">
            <div className="md:w-1/2">
              <label htmlFor="content" className="font-bold block">
                السعر :
              </label>
              <input
                name="content"
                type="text"
                placeholder="00.00 ريال سعودي"
                className="p-3 text-sm border border-main rounded-lg my-5 me-3 md:me-10 w-3/5"
              />
              <span className="text-main text-sm md:text-lg font-bold">
                ريال سعودي
              </span>
            </div>
            <div className="md:w-1/2">
              <label htmlFor="level" className="font-bold">
                مدة الدورة :
              </label>
              <select
                name="level"
                id="level"
                className="p-3 text-sm border border-main rounded-lg w-full my-5 bg-transparent"
              >
                <option value="" selected disabled>
                  اختر
                </option>
                <option value="1">1 hour</option>
                <option value="2">2 hour</option>
                <option value="3">3 hour</option>
                <option value="3">4 hour</option>
              </select>
            </div>
          </div>

          <div className="block text-center md:flex lg:w-[55%] items-center justify-between">
            <p className="text-main mb-5 md:mb-0 font-bold">
              سيستغرق مراجعة الدورة و إضافتها في الموقع 5 أيام
            </p>
            <button className="bg-main text-white py-1 px-10 rounded-xl">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default sell;
