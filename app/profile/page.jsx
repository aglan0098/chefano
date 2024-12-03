"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import axiosClient from "../_utils/axiosClient";
import { useCourseContext } from "../_contexts/CourseContext";

import Card from "../_components/Card";
import Loading from "../_components/Loading";
import { FaCamera } from "react-icons/fa";

function page() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="p-8 md:p-20">
        <div className="tabs flex justify-center gap-12 text-md font-bold mb-14">
          <button
            className={activeTab === "profile" ? "" : "text-gray-400"}
            onClick={() => handleTabClick("profile")}
          >
            حسابي
          </button>
          <button
            className={activeTab === "courses" ? "" : "text-gray-400"}
            onClick={() => handleTabClick("courses")}
          >
            دوراتي
          </button>
        </div>

        <div className="content">
          {activeTab === "profile" && <Profile />}
          {activeTab === "courses" && <Courses />}
        </div>
      </div>
    </>
  );
}

function Profile() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    profile_pic: null,
    fullNameAr: "",
    fullNameEn: "",
    email: "",
    birth: "",
    gender: "",
    nationality: "",
    city: "",
    info: "",
    phone: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      if (isLoaded && !isSignedIn) {
        router.push("/sign-in");
      }
    };

    const fetchUserData = async () => {
      if (isLoaded && isSignedIn && user) {
        const { id } = user;

        try {
          const response = await axiosClient.get(
            `/users-data?filters[clerkId][$eq]=${id}&populate=profile_pic`
          );

          if (response.data.data.length > 0) {
            const userData = response.data.data[0].attributes;
            setFormData({
              profile_pic: userData.profile_pic.data?.attributes.url || null,
              fullNameAr: userData.fullNameAr || "",
              fullNameEn: userData.fullNameEn || "",
              email: userData.email || "",
              birth: userData.birth || "",
              gender: userData.gender || "",
              nationality: userData.nationality || "",
              city: userData.city || "",
              info: userData.info || "",
              phone: userData.phone || "",
            });
            setPreviewImage(userData.profile_pic.data?.attributes.url || null);
          }
        } catch (error) {
          console.error("Error fetching user data from Strapi:", error);
        }
      }
    };

    checkUser();
    fetchUserData();
  }, [isLoaded, isSignedIn, user]);

  const handleChange = (e) => {
    if (e.target.name === "profile_pic") {
      const file = e.target.files[0];
      setFormData({ ...formData, profile_pic: file });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoaded && isSignedIn && user) {
      const { id } = user;

      try {
        const response = await axiosClient.get(
          `/users-data?filters[clerkId][$eq]=${id}`
        );

        if (response.data.data.length > 0) {
          // User exists, update their data
          const userId = response.data.data[0].id;

          //--------------------------
          const data = new FormData();
          data.append(
            "data",
            JSON.stringify({
              fullNameAr: formData.fullNameAr,
              fullNameEn: formData.fullNameEn,
              email: formData.email,
              birth: formData.birth,
              gender: formData.gender,
              nationality: formData.nationality,
              city: formData.city,
              info: formData.info,
              phone: formData.phone,
            })
          );

          if (formData.profile_pic) {
            data.append("files.profile_pic", formData.profile_pic);
          }
          //---------------------------

          await axiosClient.put(`/users-data/${userId}`, data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          alert("تم تحديث بياناتك بنجاح");
        } else {
          alert("هذا الحساب غير موجود");
        }
      } catch (error) {
        console.error("Error updating user data in Strapi:", error);
        alert("Failed to update user data. Please try again.");
      }
    }
  };

  if (!isLoaded || !isSignedIn) {
    return <Loading />;
  }

  return (
    <form
      className="rounded-3xl my-10 shadow-xl m-auto md:w-[90%]"
      onSubmit={handleSubmit}
    >
      <div
        className="relative rounded-t-3xl h-40 mb-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cover.jpg)" }}
      >
        <div className="profile absolute start-10 bottom-[-30%] rounded-full bg-slate-950 h-28 w-28">
          <img
            src={previewImage || "/images/avatar.png"}
            alt="profile image"
            className="h-full w-full rounded-full object-cover"
          />
          <div className="absolute inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer">
            <FaCamera className="text-white text-lg" />
            <input
              name="profile_pic"
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer rounded-full"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="py-10 px-10 lg:px-24">
        <h2 className="font-bold text-xl text-main mb-5">بيانات شخصية</h2>

        <div className="mb-5 md:flex items-center gap-20">
          <div className="md:w-1/2">
            <label htmlFor="name-ar" className="font-bold">
              الاسم الكامل
            </label>
            <input
              name="fullNameAr"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
              value={formData.fullNameAr}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="name-en" className="font-bold">
              الاسم الكامل ( بالإنجليزي )
            </label>
            <input
              name="fullNameEn"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
              value={formData.fullNameEn}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5 md:flex items-center gap-20">
          <div className="md:w-1/2">
            <label htmlFor="birth" className="font-bold">
              تاريخ الميلاد
            </label>
            <input
              name="birth"
              type="date"
              className="h-10 px-5 text-main text-md border border-main rounded-lg w-full my-5"
              value={formData.birth}
              onChange={handleChange}
            />
          </div>

          <div className="md:w-1/2">
            <label className="font-bold">الجنس</label>
            <div className="flex my-5 gap-7">
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  className="accent-orange-500"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label htmlFor="male" className="ms-2">
                  ذكر
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  className="accent-orange-500"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label htmlFor="female" className="ms-2">
                  أنثى
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 md:flex items-center gap-20">
          <div className="md:w-1/2">
            <label htmlFor="nationality" className="font-bold">
              الجنسية
            </label>
            <select
              name="nationality"
              id="nationality"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5 bg-transparent"
              value={formData.nationality}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                الجنسية
              </option>
              <option value="Saudi Arabia">السعوديه</option>
              <option value="Egypt">مصر</option>
              <option value="UAE">الامارات</option>
              <option value="Qatar">قطر</option>
            </select>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="city" className="font-bold">
              المدينة
            </label>
            <select
              name="city"
              id="city"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5 bg-transparent"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="" selected disabled>
                المدينة
              </option>
              <option value="makka">مكه</option>
              <option value="madina">المدينة</option>
              <option value="riaydh">الرياض</option>
              <option value="tabuk">تبوك</option>
              <option value="riaydh">عسير</option>
              <option value="tabuk">القصيم</option>
              <option value="riaydh">حائل</option>
            </select>
          </div>
        </div>

        <h2 className="font-bold text-xl text-main mb-5 mt-16">
          بيانات الحساب
        </h2>

        <div className="mb-5 md:flex gap-20">
          <div className="md:w-1/2">
            <label htmlFor="info" className="font-bold">
              نبذة عنك
            </label>
            <textarea
              name="info"
              type="text"
              className=" h-20 px-5 text-md border border-main rounded-lg w-full my-5"
              value={formData.info}
              onChange={handleChange}
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="phone" className="font-bold">
              رقم الجوال
            </label>
            <input
              name="phone"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-5 md:flex gap-20">
          <div className="md:w-1/2">
            <label htmlFor="email" className="font-bold">
              البريد الإلكتروني
            </label>
            <input
              name="email"
              type="text"
              className="h-10 px-5 text-md border border-main rounded-lg w-full my-5"
              value={formData.email}
            />
          </div>
          <div className="md:w-1/2"></div>
        </div>

        <div className="text-center mt-16">
          <button
            type="submit"
            className="bg-main text-white py-2 px-7 rounded-xl"
          >
            حفظ التعديلات
          </button>
        </div>
      </div>
    </form>
  );
}

function Courses() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { userCourses, loadingUser, fetchUserCoursesData } = useCourseContext();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      if (userCourses.length == 0) {
        fetchUserCoursesData(user.id);
      }
    }
  }, [user]);

  if (loadingUser) return <Loading />;

  if (userCourses && userCourses.length === 0)
    return (
      <h2 className="place-self-center text-2xl font-bold text-main col-span-full text-center">
        لم تقم بإنشاء أي دورات بعد
      </h2>
    );

  return (
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
        {userCourses?.map((course) => (
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
        ))}
      </div>
    </div>
  );
}

export default page;
