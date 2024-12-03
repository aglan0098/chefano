"use client";

import React, { useRef, useState } from "react";
import Review_Card from "../Review_Card";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";

import { useFeedbackContext } from "@/app/_contexts/FeedbackContext";
import Loading from "../Loading";

function Visitors() {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange_1 = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const { feedbacks, loading } = useFeedbackContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-10 px-20 bg-slate-100">
      <h2 className="text-xl font-bold text-amber-900 flex items-center gap-3">
        <span className=" bg-amber-900 rounded-full p-2">
          <FaUserGroup className="text-white" />
        </span>
        آراء الزوار
      </h2>

      <div className="relative w-[95%] m-auto my-10">
        {!isEnd && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-main text-white p-3 rounded-full absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 text-3xl"
          >
            <MdOutlineArrowBackIos />
          </button>
        )}

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange_1}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1050: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
          modules={[Navigation, A11y]}
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <Review_Card
                id={feedback?.id}
                content={feedback.attributes.content}
                user={feedback.attributes.user}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-main text-white p-3 rounded-full absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 text-3xl"
          >
            <MdOutlineArrowForwardIos />
          </button>
        )}
      </div>
    </div>
  );
}

export default Visitors;
