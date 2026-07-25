import axios from "axios";

const API_BASE = "http://localhost:3002";

const addnote = async (description) => {
  try {
    const response = await axios.post("http://localhost:3002/note/addnote", {
      description,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const deleteall = async () => {
  try {
    const response = await axios.delete("http://localhost:3002/note/deleteall");

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const update = async (note_id, description) => {
  try {
    const response = await axios.patch(
      `http://localhost:3002/note/update/${note_id}`,
      {
        description,
      },
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const deletebyid = async (note_id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3002/note/delete/${note_id}`,
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export { addnote, deleteall, update, deletebyid };
