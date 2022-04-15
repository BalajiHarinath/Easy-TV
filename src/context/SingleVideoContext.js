import { createContext, useContext, useReducer } from "react";
import { SharedReducer, InitialSharedState } from "../utils";
import axios from "axios";

const SingleVideoContext = createContext(InitialSharedState);

const SingleVideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: singleVideo,
    loading: issinglecardLoading,
    error: singlecardError,
  } = state;

  const getSingleVideo = async (_id) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`/api/video/${_id}`);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.video });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  return (
    <SingleVideoContext.Provider
      value={{
        getSingleVideo,
        singleVideo,
        issinglecardLoading,
        singlecardError,
      }}
    >
      {children}
    </SingleVideoContext.Provider>
  );
};

const useSingleVideo = () => useContext(SingleVideoContext);

export { SingleVideoProvider, useSingleVideo };
