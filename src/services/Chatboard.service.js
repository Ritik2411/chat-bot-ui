import axios from "axios";

const BaseURL = "http://localhost:5000/";

export const getReply = (message) => {
  return axios.post(BaseURL + "chat", message);
};
