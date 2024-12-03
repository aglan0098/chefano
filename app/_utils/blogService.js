const { default: axiosClient } = require("./axiosClient");

// Fetch all blogs
export const fetchAllBlogs = async () => {
    try {
        const response = await axiosClient.get('/blog-posts', {
            params: {
                filters: {
                    status: {
                        $eq: 'approved'
                    }
                },
                populate: {
                    author: true,
                    image: true
                }
            }
        });
        return response.data.data;
    } catch (error) {
        console.log("Error fetching blogs!");
        throw error;
    }
}

// Fetch blogs by a specific user
export const fetchUserBlogs = async (clerkId) => {
    try {
        const response = await axiosClient.get(`/blog-posts?filters[author][clerkId][$eq]=${clerkId}&filters[status][$eq]=approved&populate=author,image`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user blogs:", error);
        throw error;
    }
}