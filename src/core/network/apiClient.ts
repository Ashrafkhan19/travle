import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    async (config) => {
        // Example: attach token later
        // const token = await getTokenFromStorage();
        // if (token) config.headers.Authorization = `Bearer ${token}`;

        console.log("Request:", config.method?.toUpperCase(), config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        console.log("API Response:", response);
        return response;
    },
    (error) => {
        console.log("API Error:", error.response?.status);

        if (error.response?.status === 401) {
            // Handle logout logic here later
            console.log("Unauthorized. Token expired?");
        }

        return Promise.reject(error);
    }
);
