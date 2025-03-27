// src/api.js
import axios from 'axios';

// Set the base URL for your backend
const BASE_URL = 'http://localhost:8080/v1';

// Create an axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Optionally, add an interceptor to include the Bearer token if available
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // or wherever you store it
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API call to create a new user
export const createUser = async (userData) => {
  // Remove any properties that the system manages automatically
  const payload = {
    address: userData.address,
    email: userData.email,
    first_name: userData.first_name,
    last_name: userData.last_name,
    password: userData.password,
    phone_no: userData.phone_no,
    role: userData.role,
  };

  try {
    const response = await apiClient.post('/user', payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

// Function to update user profile (phone and address)
export const updateUserProfile = async (userId, updatedData, token) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user/${userId}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

// API call to fetch products with optional filters
export const getProducts = async (filters = {}) => {
  try {
    const response = await apiClient.get('/products', { params: filters });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiClient;
