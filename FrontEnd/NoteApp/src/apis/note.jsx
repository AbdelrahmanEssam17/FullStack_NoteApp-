import axios from "axios";

const addnote = async () => {
  try {
    const response = await axios.post("http://localhost:3002/note/addnote", {
      description: "hello",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};

const deleteall = async () => {
  try {
    const response = await axios.post("http://localhost:3002/note/deleteall");

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};

const update = async () => {
  try {
    const response = await axios.post("http://localhost:3002/note/update", {
      note_id: "1",
      description: "updated note",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};

const deletebyid = async () => {
  try {
    const response = await axios.post("http://localhost:3002/note/delete", {
      note_id: "1",
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data);
  }
};
