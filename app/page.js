"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import axiosClient from "@/app/_utils/axiosClient";

import Hero from "./_components/home/Hero";
import Courses from "./_components/home/Courses";
import Blogs from "./_components/home/Blogs";
import Visitors from "./_components/home/Visitors";

export default function Home() {
  const { isLoaded, user } = useUser();

  useEffect(() => {
    const createUserInStrapi = async () => {
      if (user) {
        const { id, emailAddresses } = user;
        const email = emailAddresses[0].emailAddress;

        try {
          // Check if user already exists
          const response = await axiosClient.get(
            `/users-data?filters[email][$eq]=${email}`
          );
          if (response.data.data.length === 0) {
            // User doesn't exist, create a new one
            const createResponse = await axiosClient.post("/users-data", {
              data: {
                clerkId: id,
                email: email,
              },
            });

            if (!createResponse.status === 200) {
              throw new Error("Failed to create user in Strapi");
            }

            console.log("User created in Strapi");
          } else {
            console.log("User already exists in Strapi");
          }
        } catch (error) {
          console.error("Error creating user in Strapi:", error);
        }
      }
    };

    if (isLoaded) {
      createUserInStrapi();
    }
  }, [isLoaded, user]);

  return (
    <>
      <Hero />
      <Courses />
      <Blogs />
      <Visitors />
    </>
  );
}
