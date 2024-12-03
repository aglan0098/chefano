import React from "react";
import { useRouter } from "next/navigation";

function Blog_Card({ id, image, title }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="py-8 px-3 rounded-2xl shadow-xl bg-white text-center mb-8 md:mb-0">
      <div className="w-full h-48 overflow-hidden rounded-[30px] mx-auto">
        <img
          src={image}
          alt="blog_pic"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="my-5 font-bold">{title}</h2>

      <div className="flex justify-center items-center">
        <button
          onClick={handleCardClick}
          className="text-white bg-[#FFA800] p-2 px-4 rounded-lg"
        >
          إقرأ المزيد ...
        </button>
      </div>
    </div>
  );
}

export default Blog_Card;
