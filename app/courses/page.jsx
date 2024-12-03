"use client";

import React, { useState } from "react";
import Card from "../_components/Card";
import Search from "../_components/Search";
import Loading from "../_components/Loading";
import { useCourseContext } from "../_contexts/CourseContext";

function Courses() {
  const { courses, loading } = useCourseContext();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10 md:px-15 lg:px-20 bg-slate-100">
      <Search onSearchChange={setSearchTerm} />
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

        <div className="text-center cards m-auto md:m-0 md:3/5 lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 order-2 lg:order-1">
          {loading ? (
            <div className="col-span-full text-center">
              <Loading />
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div key={course.id}>
                <Card
                  id={course?.id}
                  cover={course.attributes.cover.data?.attributes.url}
                  title={course.attributes.title}
                  duration={course.attributes.duration}
                  level={course.attributes.level}
                  price={course.attributes.price}
                />
              </div>
            ))
          )}

          {!loading && filteredCourses.length == 0 && (
            <h2 className="place-self-center text-2xl font-bold text-main col-span-full text-center">
              لايوجد دورات
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
