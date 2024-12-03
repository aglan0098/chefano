"use client";

import React, { useState, useEffect } from "react";
import Blog_Card from "../_components/Blog_Card";
import New_Blog_Card from "../_components/New_Blog_Card";
import Search from "../_components/Search";
import Loading from "../_components/Loading";
import Login_First from "../_components/Login_First";

import { FaPlus } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { PiNotePencilDuotone } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

import { useUser } from "@clerk/nextjs";
import axiosClient from "../_utils/axiosClient";
import { fetchUserBlogs } from "../_utils/blogService";
import { useBlogContext } from "../_contexts/BlogContext";

function blog() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-custom-gradient">
      <div className="py-10 px-10 text-center md:flex items-center text-md font-bold w-full md:w-4/5 lg:w-3/5 m-auto">
        <button
          className="border border-main px-10 py-2 rounded-2xl text-main hover:bg-main focus:text-white focus:bg-main hover:text-white transition-all"
          onClick={() => handleTabClick("add")}
        >
          <FaPlus className="inline me-4" />
          إضافة مدونة جديدة
        </button>
        <button
          className={`block m-auto my-5 ${
            activeTab === "all" ? "" : "text-gray-400"
          }`}
          onClick={() => handleTabClick("all")}
        >
          جميع المدونات
        </button>
        <button
          className={activeTab === "myBlogs" ? "" : "text-gray-400"}
          onClick={() => handleTabClick("myBlogs")}
        >
          المدونات التي أنشأتها
        </button>
      </div>

      <div className="content p-10 md:px-28 md:py-4">
        {activeTab === "add" && <AddBlog />}
        {activeTab === "all" && <AllBlogs />}
        {activeTab === "myBlogs" && <MyBlogs />}
      </div>
    </div>
  );
}

function AddBlog() {
  const { user, isLoaded, isSignedIn } = useUser();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    author: "",
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
              author: response.data.data[0].id,
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
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.author) {
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
          author: formData.author,
          status: formData.status,
        })
      );

      if (formData.image) {
        data.append("files.image", formData.image);
      }

      await axiosClient.post("/blog-posts", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        ...formData,
        title: "",
        content: "",
        image: null,
      });
      e.target.reset();

      setUploading(false);
      setUploaded(true);
      setTimeout(() => {
        setUploaded(false);
      }, 3000);
    } catch (error) {
      console.error("Error creating blog post:", error);
      setUploading(false);
      alert("حدث خطأ، من فضلك حاول مرةأخري ");
    }
  };

  return (
    <>
      <div className="lg:mx-10">
        <h2 className="text-2xl text-header font-extrabold flex items-center gap-3">
          <span className="bg-amber-900 rounded-full p-2">
            <PiNotePencilDuotone className="text-white" />
          </span>
          أكتب مدونة
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white rounded-3xl my-10 shadow-slate-300 shadow-md m-auto"
        >
          <div className="mb-10">
            <label htmlFor="image" className="block text-main mb-4 font-bold">
              صورة المدونة :
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="p-4 text-sm border border-main rounded-lg w-full overflow-hidden"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-10">
            <label htmlFor="title" className="block text-main mb-4 font-bold">
              أضف عنوان المدونة :
            </label>
            <input
              name="title"
              type="text"
              placeholder="أكتب هنا عنوان المدونة ..."
              className="p-5 text-sm border border-main rounded-lg w-full h-8"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-10">
            <label htmlFor="content" className="block text-main mb-4 font-bold">
              محتوى المدونة :
            </label>
            <textarea
              name="content"
              type="text"
              placeholder="أكتب هنا محتوى المدونة ..."
              className="p-4 text-sm border border-main rounded-lg w-full overflow-hidden h-[200px]"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>

          <div className="block text-center md:flex lg:w-[55%] items-center justify-between">
            <p className="text-main mb-5 md:mb-0 font-bold">
              سيستغرق نشر المدونة عدة أيام{" "}
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
            جاري رفع المدونة...
          </h2>
          <Loading />
        </div>
      )}

      {uploaded && (
        <div className="overlay">
          <div className="p-6 bg-white rounded-3xl my-10">
            <h2 className="text-main font-bold mb-5 text-center text-xl md:text-2xl">
              تم رفع المدونة بنجاح
            </h2>

            <FaCheckCircle className="m-auto text-4xl text-green-600" />
          </div>
        </div>
      )}
    </>
  );
}

function AllBlogs() {
  const { blogs, loading } = useBlogContext();
  const lastBlog = blogs[blogs.length - 1];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter Blogs based on the search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-3 lg:mx-20">
      <h2 className="text-xl font-bold text-amber-900 mb-10 flex items-center gap-3">
        <span className="bg-amber-900 rounded-full p-2">
          <HiUserGroup className="text-white" />
        </span>
        المدونات الحديثة
      </h2>

      <New_Blog_Card lastBlog={lastBlog} />

      <h2 className="text-xl font-bold text-amber-900 my-10 flex items-center gap-3">
        <span className="bg-amber-900 rounded-full p-2">
          <HiUserGroup className="text-white" />
        </span>
        جميع المدونات
      </h2>

      <div className="mb-10">
        <Search onSearchChange={setSearchTerm} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] m-auto md:w-full mb-5">
        {filteredBlogs.length ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-post">
              <Blog_Card
                id={blog?.id}
                image={blog?.attributes?.image?.data?.attributes?.url}
                title={blog.attributes.title}
              />
            </div>
          ))
        ) : (
          <h2 className="place-self-center text-xl font-bold text-main col-span-full text-center py-4">
            لايوجد مدونات
          </h2>
        )}
      </div>
    </div>
  );
}

function MyBlogs() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isLoaded && isSignedIn && user) {
          const userBlogsData = await fetchUserBlogs(user.id);
          setUserBlogs(userBlogsData);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, [isLoaded, isSignedIn, user]);

  return (
    <>
      {user ? (
        <div className="md:m-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {userBlogs.length ? (
              userBlogs.map((blog) => (
                <div key={blog.id} className="blog-post">
                  <Blog_Card
                    id={blog?.id}
                    image={blog?.attributes?.image?.data?.attributes?.url}
                    title={blog.attributes.title}
                  />
                </div>
              ))
            ) : (
              <h2 className="place-self-center text-lg font-bold text-main col-span-full text-center">
                لم تقم بإنشاء أي مدونات بعد
              </h2>
            )}
          </div>
        </div>
      ) : (
        <Login_First />
      )}
    </>
  );
}

export default blog;
