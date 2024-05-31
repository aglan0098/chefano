import React from "react";
import Card from "../_components/Card";
import Search from "../_components/Search";
import Header from "../_components/Header";

function Courses() {
  return (
    <>
      <Header />
      <div className="p-10 md:px-15 lg:px-20 bg-slate-100">
        <Search />
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
      </div>
    </>
  );
}

export default Courses;
