"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { fetchAllCourses, fetchUserCourses } from "../_utils/courseService";

const CourseContext = createContext();
export const useCourseContext = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [userCourses, setUserCourses] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setCourses(await fetchAllCourses());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const fetchUserCoursesData = async (clerkId) => {
    try {
      setLoadingUser(true);
      const specificUserCourses = await fetchUserCourses(clerkId);
      setUserCourses(specificUserCourses);
    } catch (error) {
      console.error("Error fetching user-specific courses:", error);
    } finally {
      setLoadingUser(false);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        userCourses,
        loadingUser,
        fetchUserCoursesData,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
