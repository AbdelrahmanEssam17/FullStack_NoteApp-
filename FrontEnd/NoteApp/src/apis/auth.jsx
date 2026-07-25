import axios from "axios";

const API_BASE = "http://localhost:3003";

const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/register`, {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
const verifyOTP = async (email, otp) => {
  try {
    const response = await axios.post(`${API_BASE}/auth/verify-otp`, {
      email,
      otp,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export { register, login, verifyOTP };
