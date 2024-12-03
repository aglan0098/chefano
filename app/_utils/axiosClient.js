import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
});

axiosClient.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});

export default axiosClient;
