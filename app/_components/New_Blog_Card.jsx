import React from "react";
import { useRouter } from "next/navigation";

function New_Blog_Card({ lastBlog }) {
  const router = useRouter();

  return (
    <div className="p-5 md:p-10 rounded-3xl bg-white shadow-md m-auto">
      <img
        src={lastBlog?.attributes?.image?.data?.attributes?.url}
        alt=""
        className="rounded-3xl md:h-[400px] object-cover w-full"
      />

      <div className="text-center my-5">
        <h2 className="font-bold text-xl mb-4">{lastBlog?.attributes.title}</h2>

        <p className="lg:px-20 text-lg line-clamp-2">
          {lastBlog?.attributes.content}
        </p>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <button
          className="text-white bg-[#FFA800] p-2 px-4 rounded-lg"
          onClick={() => router.push(`/blog/${lastBlog?.id}`)}
        >
          إقرأ المزيد ...
        </button>
      </div>
    </div>
  );
}

export default New_Blog_Card;
