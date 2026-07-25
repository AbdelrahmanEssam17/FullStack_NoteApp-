import axios from "axios";

const API_BASE = "http://localhost:3003";

const register = async (username, email, password) => {
  try {
    const response = await axios.post("http://localhost:3003/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:3003/auth/login", {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
const verifyOTP = async (email, otp) => {
  try {
    const response = await axios.post("http://localhost:3003/auth/verify-otp", {
      email,
      otp,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export { register, login, verifyOTP };
