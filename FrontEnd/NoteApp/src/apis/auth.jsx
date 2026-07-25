import axios from "axios";

const register = async () => {
  try {
    const response = await axios.post("http://localhost:3003/auth/register", {
      username: "abdo",
      email: "eabdo6990110@gmail.com",
      password: "abdo@#$AA123",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};

const login = async () => {
  try {
    const response = await axios.post("http://localhost:3003/auth/login", {
      username: "abdoessam",
      password: "123####55saA",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};
const verifyOTP = async () => {
  try {
    const response = await axios.post("http://localhost:3003/auth/verify-otp", {
      email: "eabdo6990110@gmail.com",
      otp: "123456",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};
