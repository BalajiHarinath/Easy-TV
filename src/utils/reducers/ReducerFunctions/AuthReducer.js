export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      return { ...state, authData: payload };
    case "SIGN_UP_ERROR":
      return { ...state, authErrorMsg: payload };
    case "LOGIN":
      return { ...state, authData: payload };
    case "LOGIN_ERROR":
      return { ...state, authErrorMsg: payload };
    case "REMOVE_ERROR_MSG":
      return { ...state, authErrorMsg: payload };
    case "LOGOUT":
      return { ...state, authData: payload };
    default:
      return state;
  }
};
