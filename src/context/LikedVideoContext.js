import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { SharedReducer, InitialSharedState } from "../utils";
import { useToast } from "./ToastContext";

const LikedVideoContext = createContext(InitialSharedState);

const LikedVideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: LikedVideos,
    loading: isLikedVideosLoading,
    errorStatus: isLikedVideosError,
    errorData: LikedVideosErrorData,
  } = state;

  const config = {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  };

  const { addToast } = useToast();

  const getLikedVideos = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get("/api/user/likes", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.likes });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.data.errors[0] });
      console.error(error);
    }
  };

  const addItemToLikedVideos = async (video) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.post("/api/user/likes", { video }, config);
      if (response.status === 201) {
        dispatch({ type: "SUCCESS", payload: response.data.likes });
        addToast({ status: "added", msg: "Added to liked videos" });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.data.errors[0] });
      console.error(error);
    }
  };

  const removeItemFromLikedVideos = async (_id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.delete(`/api/user/likes/${_id}`, config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.likes });
        addToast({ status: "removed", msg: "Removed from liked videos" });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.data.errors[0] });
      console.error(error);
    }
  };
  const logoutlikedVideos = () => {
    dispatch({ type: "LOGOUT", payload: [] });
  }

  return (
    <LikedVideoContext.Provider
      value={{
        getLikedVideos,
        addItemToLikedVideos,
        removeItemFromLikedVideos,
        logoutlikedVideos,
        LikedVideos,
        isLikedVideosLoading,
        isLikedVideosError,
        LikedVideosErrorData,
      }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
};

const useLikedVideo = () => useContext(LikedVideoContext);

export { LikedVideoProvider, useLikedVideo };
