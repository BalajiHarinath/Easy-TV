import axios from "axios";

export const getWatchLaterVideosService = async () => {
  const response = await axios.get("/api/user/watchlater", {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  });
  return response;
};

export const addItemToWatchLaterService = async (video) => {
  const response = await axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: localStorage.getItem("videoToken"),
      },
    }
  );
  return response;
};

export const removeItemFromWatchLaterService = async (_id) => {
  const response = await axios.delete(`/api/user/watchlater/${_id}`, {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  });
  return response;
};
