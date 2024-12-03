const { default: axiosClient } = require("./axiosClient");

// Fetch all courses
export const fetchAllCourses = async () => {
  try {
    const response = await axiosClient.get("/courses", {
      params: {
        filters: {
          status: {
            $eq: "approved",
          },
        },
        populate: {
          tutor: true,
          cover: true,
        },
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("Error fetching courses!");
    throw error;
  }
};

// Fetch courses by a specific user
export const fetchUserCourses = async (clerkId) => {
  try {
    const response = await axiosClient.get(`/courses`, {
      params: {
        filters: {
          tutor: {
            clerkId: {
              $eq: clerkId,
            },
          },
          status: {
            $eq: "approved",
          },
        },
        populate: {
          tutor: true,
          cover: true,
        },
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user courses:", error);
    throw error;
  }
};
