import { createContext, useContext, useReducer } from "react";
import { SharedReducer, InitialSharedState } from "../utils";
import axios from "axios";

const VideoContext = createContext(InitialSharedState);

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: allVideos,
    loading: iscardLoading,
    errorStatus: iscardError,
    errorData: cardErrorData,
  } = state;

  const getAllVideos = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/api/videos");
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.videos });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.response.data.errors[0] });
      console.error(error);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        getAllVideos,
        allVideos,
        iscardLoading,
        iscardError,
        cardErrorData,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
