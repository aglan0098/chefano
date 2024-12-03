"use client";

import { useMemo, useState } from "react";
import Login_First from "@/app/_components/Login_First";
import Loading from "@/app/_components/Loading";

import { useUser } from "@clerk/nextjs";
import { useCourseContext } from "@/app/_contexts/CourseContext";
import { useRouter } from "next/navigation";

import { FaPlayCircle, FaChartLine } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";

function CourseDetailPage({ params }) {
  const { user } = useUser();
  const { id } = params;
  const { courses } = useCourseContext();
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const course = useMemo(() => {
    return courses.find((course) => course.id === parseInt(id));
  }, [id, courses]);

  if (!courses.length)
    return (
      <div className="bg-slate-200 p-10 lg:px-28 h-[70vh] flex flex-col justify-center items-center">
        <h2 className="text-main text-2xl font-bold">جاري التحميل...</h2>
        <Loading />
      </div>
    );

  if (!course)
    return (
      <div className="bg-slate-200 p-10 lg:px-28 h-[70vh] flex justify-center items-center">
        <h2 className="text-header text-2xl font-bold text-center">
          هذة الدورة غير موجودة
        </h2>
      </div>
    );

  const checkout = async () => {
    if (!user) {
      setModal(true);
      return;
    }

    try {
      // call the Next.js API route to create a checkout session
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.attributes.title,
          coursePrice: course.attributes.price,
          userId: user.id,
        }),
      });

      const data = await response.json();

      // Redirect to Stripe Checkout
      if (data.checkoutUrl) {
        router.push(data.checkoutUrl);
      } else {
        console.error("Failed to create checkout session:", data.error);
      }
    } catch (error) {
      console.error("Error in creating checkout session:", error);
    }
  };

  return (
    <>
      <div className="lg:flex justify-between items-center bg-slate-200 p-10 lg:p-20 gap-16">
        <div className="details lg:w-1/2 order-2 lg:order-1 mb-10 lg:m-0">
          <h1 className="font-bold text-2xl md:text-3xl text-[#311A08] mb-10">
            {course.attributes.title}
          </h1>
          <p className="mb-7">{course.attributes.content}</p>

          <div className="flex gap-7 mb-10 text-gray-500">
            <p className="flex items-center gap-2">
              <FaClock /> {course.attributes.duration}
            </p>

            <p className="flex items-center gap-2">
              <FaChartLine /> {course.attributes.level}
            </p>

            <p className="flex items-center gap-2">
              <FaMoneyBillWave /> {course.attributes.price} ريال
            </p>

            <p className="flex items-center gap-2">
              <IoPerson /> {course.attributes.tutor.data.attributes.fullNameAr}
            </p>
          </div>

          <button
            className="bg-[#FFA800] p-2 px-5 rounded-2xl flex items-center"
            onClick={checkout}
          >
            <FaPlayCircle className="me-3 text-xl" />
            إشترك
          </button>
        </div>

        <div className="relative lg:w-1/2 order-1 lg:order-2">
          <img
            src={
              course.attributes.cover.data?.attributes.url ||
              "/images/default_cover.jpeg"
            }
            alt={course.attributes.title}
            className="rounded-3xl"
          />
        </div>
      </div>

      {modal && (
        <div className="overlay" onClick={() => setModal(false)}>
          <Login_First />
        </div>
      )}
    </>
  );
}

export default CourseDetailPage;
