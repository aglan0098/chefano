"use client";

import React, { useState, useEffect } from "react";
import Loading from "../_components/Loading";
import Login_First from "../_components/Login_First";

import { LuMonitorPlay } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

import { useUser } from "@clerk/nextjs";
import axiosClient from "../_utils/axiosClient";

function sell() {
  const { user, isLoaded, isSignedIn } = useUser();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    level: "",
    price: "",
    duration: "",
    media: null,
    cover: null,
    tutor: "",
    status: "pending",
  });

  const [modal, setModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          const response = await axiosClient.get(
            `/users-data?filters[clerkId][$eq]=${user.id}`
          );
          if (response.data && response.data.data.length > 0) {
            setFormData((prevData) => ({
              ...prevData,
              tutor: response.data.data[0].id,
            }));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [isLoaded, isSignedIn, user]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;

    if (name === "cover" || name === "media") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.tutor) {
      setModal(true);
      return;
    }

    setUploading(true);
    try {
      const data = new FormData();
      data.append(
        "data",
        JSON.stringify({
          title: formData.title,
          content: formData.content,
          level: formData.level,
          duration: formData.duration,
          price: formData.price,
          tutor: formData.tutor,
          status: formData.status,
        })
      );

      if (formData.cover) {
        data.append("files.cover", formData.cover);
      }

      if (formData.media) {
        data.append("files.media", formData.media);
      }

      await axiosClient.post("/courses", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        ...formData,
        title: "",
        content: "",
        level: "",
        price: "",
        duration: "",
        media: null,
        cover: null,
      });
      e.target.reset();

      setUploading(false);
      setUploaded(true);
      setTimeout(() => {
        setUploaded(false);
      }, 3000);
    } catch (error) {
      console.error("Error uploading the course:", error);
      setUploading(false);
      alert("حدث خطأ، من فضلك حاول مرةأخري ");
    }
  };

  return (
    <>
      <div className="p-5 md:p-28 bg-custom-gradient">
        <h2 className="text-2xl font-extrabold text-header flex items-center gap-3">
          <span className="text-3xl">
            <LuMonitorPlay />
          </span>
          بيع دوراتك معنا
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white rounded-3xl my-10 shadow-md m-auto"
        >
          <div className="mb-10">
            <label htmlFor="title" className="block text-main mb-4 font-bold">
              أضف عنوان الدورة :
            </label>
            <input
              name="title"
              type="text"
              placeholder="أكتب هنا عنوان الدوره ..."
              className="p-5 text-sm border border-main rounded-lg w-full h-8"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-10">
            <label htmlFor="content" className="block text-main mb-4 font-bold">
              محتوى الدورة :
            </label>
            <textarea
              name="content"
              placeholder="أكتب هنا محتوى الدوره ..."
              className="p-4 text-sm border border-main rounded-lg w-full overflow-hidden h-[200px]"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-10 md:flex items-center gap-10 lg:gap-48">
            <div className="md:w-1/2">
              <label htmlFor="media" className="font-bold">
                رفع الدورة :
              </label>
              <input
                name="media"
                type="file"
                accept="video/*"
                id="media"
                className="p-5 text-sm border border-main rounded-lg w-full my-5"
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="cover" className="font-bold">
                صورة الدورة :
              </label>
              <input
                name="cover"
                type="file"
                accept="image/*"
                id="cover"
                className="p-5 text-sm border border-main rounded-lg w-full my-5"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-10 md:flex items-center gap-10 lg:gap-48">
            <div className="md:w-1/2">
              <label htmlFor="level" className="font-bold">
                مستوى الدورة :
              </label>
              <select
                name="level"
                id="level"
                className="p-5 text-sm border border-main rounded-lg w-full my-5 bg-transparent"
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled>
                  اختر
                </option>
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="متقدم">متقدم</option>
              </select>
            </div>
            <div className="md:w-1/2">
              <label htmlFor="duration" className="font-bold">
                مدة الدورة :
              </label>
              <select
                name="duration"
                id="duration"
                className="p-3 text-sm border border-main rounded-lg w-full my-5 bg-transparent"
                value={formData.duration}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled>
                  اختر
                </option>
                <option value="1">ساعة</option>
                <option value="2">ساعتين</option>
                <option value="3">3 ساعات</option>
                <option value="3">4 ساعات</option>
              </select>
            </div>
          </div>

          <div className="md:w-1/2 mb-10">
            <label htmlFor="price" className="font-bold block">
              السعر :
            </label>
            <input
              name="price"
              type="text"
              placeholder="00.00 ريال سعودي"
              className="p-3 text-sm border border-main rounded-lg my-5 me-3 md:me-10 w-3/5"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <span className="text-main text-sm md:text-lg font-bold">
              ريال سعودي
            </span>
          </div>

          <div className="block text-center md:flex lg:w-[55%] items-center justify-between">
            <p className="text-main mb-5 md:mb-0 font-bold">
              سيستغرق مراجعة الدورة و إضافتها في الموقع 5 أيام
            </p>
            <button
              type="submit"
              className="bg-main text-white py-1 px-10 rounded-xl"
            >
              إرسال
            </button>
          </div>
        </form>
      </div>

      {modal && (
        <div className="overlay" onClick={() => setModal(false)}>
          <Login_First />
        </div>
      )}

      {uploading && (
        <div className="overlay">
          <h2 className="text-2xl text-main mb-5 font-bold">
            جاري رفع الدورة...
          </h2>
          <Loading />
        </div>
      )}

      {uploaded && (
        <div className="overlay">
          <div className="p-6 bg-white rounded-3xl my-10">
            <h2 className="text-main font-bold mb-5 text-center text-xl md:text-2xl">
              تم رفع الدورة بنجاح
            </h2>

            <FaCheckCircle className="m-auto text-4xl text-green-600" />
          </div>
        </div>
      )}
    </>
  );
}

export default sell;
