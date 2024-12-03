"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import axiosClient from "@/app/_utils/axiosClient";
import Loading from "@/app/_components/Loading";
import Login_First from "@/app/_components/Login_First";
import { useUser } from "@clerk/nextjs";

import { FaChartLine } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

function CourseContentPage({ params }) {
  const { user } = useUser();
  const { id } = params;

  const [course, setCourse] = useState(null);
  const [isParticipant, setIsParticipant] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const userId = user?.id;

  useLayoutEffect(() => {
    const fetchCourseDetails = async () => {
      // if (!userId) {
      //   setIsLoading(false); // User not signed in, stop loading
      //   return;
      // }

      try {
        // Fetch course details (including participants)
        const response = await axiosClient.get(
          `/courses/${id}?populate[tutor]=*&populate[media]=*&populate[participants]=*`
        );
        const courseData = response.data.data;

        // Check if the user is a participant
        const participantIds = courseData.attributes.participants.data.map(
          (participant) => participant.attributes.clerkId
        );
        setIsParticipant(participantIds.includes(userId));
        setCourse(courseData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id, userId]);

  if (isLoading && !user) {
    return (
      <div className="bg-slate-200 p-10 lg:px-28 flex flex-col justify-center items-center">
        <h2 className="text-main text-2xl font-bold">جاري التحميل...</h2>
        <Loading />
      </div>
    );
  }

  if (!isParticipant && course) {
    return (
      <div className="bg-slate-200 p-10 lg:px-28 h-[70vh] flex justify-center items-center">
        <h2 className="text-header text-2xl font-bold text-center">
          أنت غير مشترك في هذه الدورة.
        </h2>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="bg-slate-200 p-10 lg:px-28 h-[70vh] flex justify-center items-center">
        <h2 className="text-header text-2xl font-bold text-center">
          هذة الدورة غير موجودة
        </h2>
      </div>
    );
  }

  if (!isLoading && !user) {
    return (
      <div className="py-10 md:p-10 lg:p-20">
        <Login_First />
      </div>
    );
  }

  const { title, content, duration, level, media, tutor } = course?.attributes;
  const tutorName = tutor.data.attributes.fullNameAr;
  const videoUrl = media?.data?.attributes?.url;

  return (
    <>
      <div className="bg-slate-200 p-10 lg:px-28">
        <div className="details mb-10 lg:m-0 lg:w-[75%]">
          <h1 className="font-bold text-2xl md:text-3xl text-[#311A08] mb-10">
            {title}
          </h1>
          <p className="mb-7">{content}</p>

          <div className="flex justify-center lg:justify-start gap-7 mb-10 text-gray-500">
            <p className="flex items-center gap-2">
              <FaClock /> {duration} ساعه
            </p>
            <p className="flex items-center gap-2">
              <FaChartLine /> {level}
            </p>
            <p className="flex items-center gap-2">
              <IoPerson /> {tutorName}
            </p>
          </div>
        </div>

        <div className="content flex justify-center">
          {videoUrl ? (
            <video width="900" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video available for this course.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseContentPage;
