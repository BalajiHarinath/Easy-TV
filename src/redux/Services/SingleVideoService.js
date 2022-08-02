import axios from "axios";

export const getSingleVideoService = async (_id) => {
    const response = await axios.get(`/api/video/${_id}`);
    return response;
}