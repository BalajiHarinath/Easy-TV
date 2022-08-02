import axios from "axios";

export const getAllVideosService = async () => {
  const response = await axios.get("/api/videos");
  return response;
};
