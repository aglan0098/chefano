"use client";

import React, { useRef, useState } from "react";
import Card from "../Card";
import Search from "../Search";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";

function Courses() {
  const swiperRef_1 = useRef(null);
  const swiperRef_2 = useRef(null);

  const [isBeginning_1, setIsBeginning_1] = useState(true);
  const [isEnd_1, setIsEnd_1] = useState(false);

  const handleSlideChange_1 = (swiper) => {
    setIsBeginning_1(swiper.isBeginning);
    setIsEnd_1(swiper.isEnd);
  };

  const [isBeginning_2, setIsBeginning_2] = useState(true);
  const [isEnd_2, setIsEnd_2] = useState(false);

  const handleSlideChange_2 = (swiper) => {
    setIsBeginning_2(swiper.isBeginning);
    setIsEnd_2(swiper.isEnd);
  };

  return (
    <div className="mt-12 md:mt-10 md:mb-10 lg:mt-0 px-10 md:px-20">
      <Search />

      <h2 className="text-xl font-bold text-amber-900 mb-10 flex items-center gap-3">
        <FaPlayCircle className="text-2xl" />
        الدورات الحديثة
      </h2>

      <div className="relative">
        {!isEnd_1 && (
          <button
            onClick={() => swiperRef_1.current?.slideNext()}
            className="bg-main text-white p-3 rounded-full absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 text-3xl"
          >
            <MdOutlineArrowBackIos />
          </button>
        )}

        <Swiper
          onSwiper={(swiper) => {
            swiperRef_1.current = swiper;
            setIsBeginning_1(swiper.isBeginning);
            setIsEnd_1(swiper.isEnd);
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
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>

        {!isBeginning_1 && (
          <button
            onClick={() => swiperRef_1.current?.slidePrev()}
            className="bg-main text-white p-3 rounded-full absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 text-3xl"
          >
            <MdOutlineArrowForwardIos />
          </button>
        )}
      </div>

      <h2 className="text-xl font-bold text-amber-900 my-5 md:my-10 flex items-center gap-3">
        <FaCheckCircle className="text-2xl" />
        الدورات الأكثر مبيعًا
      </h2>

      <div className="relative">
        {!isEnd_2 && (
          <button
            onClick={() => swiperRef_2.current?.slideNext()}
            className="bg-main text-white p-3 rounded-full absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10 text-3xl"
          >
            <MdOutlineArrowBackIos />
          </button>
        )}

        <Swiper
          onSwiper={(swiper) => {
            swiperRef_2.current = swiper;
            setIsBeginning_1(swiper.isBeginning);
            setIsEnd_1(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange_2}
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
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>

        {!isBeginning_2 && (
          <button
            onClick={() => swiperRef_2.current?.slidePrev()}
            className="bg-main text-white p-3 rounded-full absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10 text-3xl"
          >
            <MdOutlineArrowForwardIos />
          </button>
        )}
      </div>
    </div>
  );
}

export default Courses;
