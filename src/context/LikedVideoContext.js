import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { SharedReducer, InitialSharedState } from "../utils";

const LikedVideoContext = createContext(InitialSharedState);

const LikedVideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: LikedVideos,
    loading: isLikedVideosLoading,
    error: LikedVideosError,
  } = state;

  const config = {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  };

  const getLikedVideos = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get("/api/user/likes", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.likes });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addItemToLikedVideos = async (video) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.post("/api/user/likes", { video }, config);
      if (response.status === 201) {
        dispatch({ type: "SUCCESS", payload: response.data.likes });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemFromLikedVideos = async (_id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.delete(`/api/user/likes/${_id}`, config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.likes });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LikedVideoContext.Provider
      value={{
        getLikedVideos,
        addItemToLikedVideos,
        removeItemFromLikedVideos,
        LikedVideos,
        isLikedVideosLoading,
        LikedVideosError,
      }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
};

const useLikedVideo = () => useContext(LikedVideoContext);

export { LikedVideoProvider, useLikedVideo };
