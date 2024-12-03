const { default: axiosClient } = require("./axiosClient");

// Fetch all feedbacks
export const fetchAllFeedbacks = async () => {
    try {
        const response = await axiosClient.get('/feedbacks?filters[status][$eq]=approved&populate[user][populate]=profile_pic');
        return response.data.data;
    } catch (error) {
        console.log("Error fetching feedback!");
        throw error;
    }
}