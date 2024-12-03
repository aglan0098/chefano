import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import axiosClient from "../_utils/axiosClient";

import { FaPlayCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdInsertChart } from "react-icons/md";

function Card({ id, cover, title, duration, level, price }) {
  const router = useRouter();
  const { user } = useUser();
  const [isParticipant, setIsParticipant] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axiosClient.get(
          `/courses/${id}?populate=participants`
        );
        const participants = response.data.data.attributes.participants.data;

        // Check if the user is a participant in this course
        const isUserParticipant = participants.some(
          (participant) => participant.attributes.clerkId === user.id
        );
        setIsParticipant(isUserParticipant);
      } catch (error) {
        console.error("Error fetching course participants", error);
      }
    };

    if (user) {
      checkSubscription();
    }
  }, [id, user]);

  const handleCardClick = () => {
    if (isParticipant) {
      router.push(`/courses/${id}/content`);
    } else {
      router.push(`/courses/${id}/details`);
    }
  };

  return (
    <div
      className="relative rounded-3xl my-4 md:my-0 h-60 md:w-full bg-cover"
      style={{
        backgroundImage: `url(${cover || "/images/card_pic.jpeg"})`,
      }}
      onClick={handleCardClick}
    >
      <div className="absolute bottom-0 w-full p-4 bg-[#707070cd] backdrop-blur-custom-card rounded-3xl">
        <div className="flex items-center justify-between mb-5 gap-3 px-2">
          <h2 className="text-2xl text-white w-2/5 overflow-hidden whitespace-nowrap text-ellipsis">
            {title}
          </h2>

          <div className="flex gap-3 items-center justify-center text-[#ffe8d6]">
            <span className="flex items-center gap-2">
              {level}
              <MdInsertChart className="text-xl" />
            </span>
            <span className="border-e border-[#f7bb8de3] h-6"></span>
            <span className="flex items-center gap-2">
              {duration}
              <FaClock className="text-xl" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-white">
          <div className="bg-[#73C0C5] p-2 px-4 rounded-2xl">{price} ريال</div>
          <button className="bg-[#FFA800] p-2 px-5 rounded-2xl flex items-center">
            <FaPlayCircle className="me-3 text-xl" />
            إشترك
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
