import axios from "axios";

export const getLikedVideosService = async () => {
    const response = await axios.get(
        "/api/user/likes",
        {
            headers: {
                authorization: localStorage.getItem("videoToken")
            }
        });
    return response;
}

export const addItemToLikedVideosService = async (video) => {
    const response = await axios.post(
        "/api/user/likes",
         { video }, 
         {
             headers: {
                 authorization: localStorage.getItem("videoToken")
             }
         });
    return response;
}

export const removeItemFromLikedVideosService = async (_id) => {
    const response = await axios.delete(
        `/api/user/likes/${_id}`, 
        {
            headers: {
                authorization: localStorage.getItem("videoToken")
            }
        });
        return response;
}