export const SharedReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, errorStatus: false };
    case "SUCCESS":
      return { ...state, loading: false, errorStatus: false, data: payload };
    case "ERROR":
      return {
        ...state,
        loading: false,
        errorStatus: true,
        errorData: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        errorStatus: true,
        errorData: payload,
      };
    default:
      return state;
  }
};
