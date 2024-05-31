import React from "react";

function Filter() {
  return (
    <div className=" rounded-3xl bg-white shadow-lg px-5 py-7">
      <h2 className="font-bold">التصنيف</h2>
      <hr className="my-5" />
      <ul>
        <li className="mb-2">
          <input type="checkbox" className="me-2 accent-orange-500" />
          <label htmlFor="">جميع الدورات</label>
        </li>
        <li className="mb-2">
          <input type="checkbox" className="me-2 accent-orange-500" />
          <label htmlFor="">الدورات المجانية</label>
        </li>
        <li className="mb-2">
          <input type="checkbox" className="me-2 accent-orange-500" />
          <label htmlFor="">الدورات المدفوعة</label>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
