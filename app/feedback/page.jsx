"use client";

import React, { useState, useEffect } from "react";
import Login_First from "../_components/Login_First";
import { useUser } from "@clerk/nextjs";
import axiosClient from "../_utils/axiosClient";
import { FaCheckCircle } from "react-icons/fa";

function Feedback() {
  const { user, isLoaded, isSignedIn } = useUser();

  const [formData, setFormData] = useState({
    content: "",
    user: "",
    status: "pending",
  });

  const [modal, setModal] = useState(false);
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
              user: response.data.data[0].id,
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user) {
      setModal(true);
      return;
    }

    try {
      const data = new FormData();
      data.append(
        "data",
        JSON.stringify({
          content: formData.content,
          user: formData.user,
          status: formData.status,
        })
      );

      await axiosClient.post("/feedbacks", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        ...formData,
        content: "",
      });

      setUploaded(true);
      setTimeout(() => {
        setUploaded(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending the feedback:", error);
      alert("حدث خطأ، من فضلك حاول مرةأخري ");
    }
  };

  return (
    <>
      <div className="p-5 md:p-28 bg-custom-gradient">
        <h2 className="text-2xl font-extrabold text-header flex items-center gap-3">
          رأيك يهمنا
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white rounded-3xl my-10 shadow-md m-auto"
        >
          <div className="mb-10">
            <label htmlFor="content" className="block text-main mb-4 font-bold">
              اعطنا رأيك واقتراحاتك لتطوير خدماتنا
            </label>
            <textarea
              name="content"
              placeholder="أكتب رأيك هنا..."
              className="p-4 text-sm border border-main rounded-lg w-full overflow-hidden h-[200px]"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>

          <div className="block text-center md:flex items-center justify-center">
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

      {uploaded && (
        <div className="overlay">
          <div className="p-6 bg-white rounded-3xl my-10">
            <h2 className="text-main font-bold mb-5 text-center text-xl md:text-2xl">
              تم إستقبال رأيك، شكراً لك
            </h2>

            <FaCheckCircle className="m-auto text-4xl text-green-600" />
          </div>
        </div>
      )}
    </>
  );
}

export default Feedback;
