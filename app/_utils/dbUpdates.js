import axiosClient from './axiosClient';

export async function updateDatabaseOnPaymentSuccess(courseId, userId) {
    try {
        // Fetch the user data
        const userResponse = await axiosClient.get(`/users-data?filters[clerkId][$eq]=${userId}`);
        const user = userResponse.data.data[0];

        if (!user) {
            throw new Error('User not found');
        }

        // Fetch the course data to get current participants
        const courseResponse = await axiosClient.get(`/courses/${courseId}`);
        const course = courseResponse.data.data;

        if (!course) {
            throw new Error('Course not found');
        }

        // Update the course entry to add the user as a participant (many-to-many relationship)
        await axiosClient.put(`/courses/${courseId}`, {
            data: {
                participants: [...(course.attributes.participants?.data.map(p => p.id) || []), user.id],
            },
        });

        console.log('Database updated successfully');
    } catch (error) {
        console.error('Error updating database:', error);
    }
}
