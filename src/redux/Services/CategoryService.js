import axios from "axios";

export const getCategoriesService = async () => {
  const response = await axios.get("/api/categories");
  return response;
};
