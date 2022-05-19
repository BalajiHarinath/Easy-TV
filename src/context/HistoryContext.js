import { createContext, useContext, useReducer } from "react";
import { SharedReducer, InitialSharedState } from "../utils";
import axios from "axios";
import { useToast } from "./ToastContext";

const HistoryContext = createContext(InitialSharedState);

const HistoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SharedReducer, InitialSharedState);
  const {
    data: HistoryData,
    loading: isHistoryLoading,
    errorStatus: isHistoryError,
    errorData: HistoryErrorData,
  } = state;

  const config = {
    headers: {
      authorization: localStorage.getItem("videoToken"),
    },
  };

  const { addToast } = useToast();

  const getHistoryVideos = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.get("/api/user/history", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  const addVideoToHistory = async (video) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.post("/api/user/history", { video }, config);
      if (response.status === 201) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  const removeVideoFromHistory = async (_id) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.delete(`api/user/history/${_id}`, config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
        addToast({ status: "removed", msg: "Removed from history" });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  const clearHistory = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await axios.delete("/api/user/history/all", config);
      if (response.status === 200) {
        dispatch({ type: "SUCCESS", payload: response.data.history });
        addToast({ status: "removed", msg: "History cleared" });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
      console.error(error);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        getHistoryVideos,
        addVideoToHistory,
        removeVideoFromHistory,
        clearHistory,
        HistoryData,
        isHistoryLoading,
        isHistoryError,
        HistoryErrorData,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { HistoryProvider, useHistory };
