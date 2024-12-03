"use client";

import { useBlogContext } from "@/app/_contexts/BlogContext";

function BlogDetailPage({ params }) {
  const { id } = params;
  const { blogs } = useBlogContext();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="bg-slate-200 p-10 lg:px-28 h-[70vh] flex justify-center items-center">
        <h2 className="text-header text-2xl font-bold text-center">
          هذة المدونة غير موجودة
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-custom-gradient">
      <div className="p-8 lg:w-[90%] md:m-auto md:py-14">
        <h1 className="font-bold text-2xl md:text-2xl text-amber-950">
          {blog.attributes.title}
        </h1>
        <img
          src={blog.attributes.image.data?.attributes.url}
          className="mt-10 mb-12 m-auto md:h-[400px] lg:w-3/4 object-cover rounded-3xl"
        />
        <p className="text-lg">{blog.attributes.content}</p>
      </div>
    </div>
  );
}

export default BlogDetailPage;
