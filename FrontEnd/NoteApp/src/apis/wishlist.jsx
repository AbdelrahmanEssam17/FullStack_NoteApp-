import axios from "axios";

const API_BASE = "http://localhost:3003";

const getall = async () => {
  try {
    const response = await axios.get(`${API_BASE}/wishlist/getall`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const deleteall = async () => {
  try {
    const response = await axios.delete(`${API_BASE}/wishlist/deleteall`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const addtowithlist = async (note_id) => {
  try {
    const response = await axios.post(`${API_BASE}/wishlist/addtowithlist`, {
      note_id,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const removefrom = async (note_id) => {
  try {
    const response = await axios.delete(
      `${API_BASE}/wishlist/remove-from/${note_id}`,
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export { getall, deleteall, addtowithlist, removefrom };
