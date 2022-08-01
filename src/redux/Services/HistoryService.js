import axios from "axios";

export const getHistoryVideosService = async () => {
    const response = await axios.get(
        "/api/user/history", 
        {
            headers: {
                authorization: localStorage.getItem("videoToken")
            }
        }
    );
    return response;
}

export const addVideoToHistoryService = async (video) => {
    const response = await axios.post(
        "/api/user/history", 
        { video }, 
        {
            headers: {
                authorization: localStorage.getItem("videoToken")
            }
        }
    );
    return response;
}

export const removeVideoFromHistoryService = async (_id) => {
    const response = await axios.delete(
        `api/user/history/${_id}`, 
        {
            headers: {
                authorization: localStorage.getItem("videoToken")
            }
        }
    );
    return response;
}

export const clearHistoryService = async () => {
    const response = await axios.delete(
        "/api/user/history/all",
        {
            headers: {
                authorization: localStorage.getItem("videoToken")
            }
        }
    );
    return response;
}