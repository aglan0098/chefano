import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import Blog_Card from "../Blog_Card";
import { useBlogContext } from "@/app/_contexts/BlogContext";
import Loading from "../Loading";
import New_Blog_Card from "../New_Blog_Card";
import { HiUserGroup } from "react-icons/hi2";

function Blogs() {
  const { blogs, loading } = useBlogContext();
  const lastBlog = blogs[blogs.length - 1];

  return (
    <>
      <div className="p-10 bg-[#FAF1E3]">
        <div className="flex items-center gap-5 md:w-[50%] m-auto mb-14">
          <div className="flex-1 border-t border-amber-900"></div>
          <h2 className="text-center font-bold text-xl text-amber-900 flex items-center gap-3">
            <span className=" bg-amber-900 rounded-full p-2">
              <IoRestaurantOutline className="text-white" />
            </span>
            وصفات مميزة
          </h2>
          <div className="flex-1 border-t border-amber-900"></div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:w-[60%] md:w-full lg:w-[80%] xl:w-[60%] m-auto">
            {blogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className="blog-post">
                <Blog_Card
                  id={blog?.id}
                  image={blog?.attributes?.image?.data?.attributes?.url}
                  title={blog.attributes.title}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-10 bg-slate-100">
        <div className="flex items-center gap-5 md:w-[50%] m-auto mb-4">
          <div className="flex-1 border-t border-amber-900"></div>
          <h2 className="text-center my-5 font-bold text-xl text-amber-900 flex items-center gap-3">
            <span className="bg-amber-900 rounded-full p-2">
              <HiUserGroup className="text-white" />
            </span>
            المدونات الحديثة
          </h2>
          <div className="flex-1 border-t border-amber-900"></div>
        </div>

        <div className="md:w-[80%] lg:w-[60%] m-auto">
          <New_Blog_Card lastBlog={lastBlog} />
        </div>
      </div>
    </>
  );
}

export default Blogs;
