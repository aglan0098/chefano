import React from "react";

function Review_Card({ content, user }) {
  return (
    <div className="card border border-amber-400 rounded-3xl shadow-md p-7 my-4 md:my-0">
      <div className="text-center lg:text-right lg:flex gap-5 items-center">
        <img
          className="m-auto lg:m-0 rounded-full h-20 w-20"
          src={
            user.data.attributes.profile_pic.data?.attributes.url ||
            "/images/avatar.png"
          }
          alt="profile_picture"
        />
        <div className="name">
          <p className="font-extrabold">{user.data.attributes.fullNameAr}</p>
          <p className="text-gray-500">{user.data.attributes.fullNameEn}</p>
        </div>
      </div>
      <hr className="my-4" />
      <p>{content}</p>
    </div>
  );
}

export default Review_Card;
