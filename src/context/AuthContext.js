import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { AuthReducer, InitialAuthData } from "../utils";

const AuthContext = createContext(InitialAuthData);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, InitialAuthData);
  const { authData, authErrorMsg } = authState;

  useEffect(() => {
    if (authErrorMsg) {
      const timeoutID = setTimeout(() => {
        authDispatch({ type: "REMOVE_ERROR_MSG", payload: "" });
      }, 3000);

      return () => clearTimeout(timeoutID);
    }
  }, [authErrorMsg]);

  const signup = async (userDetails) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "SIGN_UP", payload: response.data.createdUser });
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 422) {
        authDispatch({
          type: "SIGN_UP_ERROR",
          payload: "The email already exists",
        });
      }
    }
  };

  const login = async (userDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: userDetails.email,
        password: userDetails.password,
      });
      if (response.status === 200) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data.foundUser });
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The email you entered is not Registered",
        });
      } else if (error.response.status === 401) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The credentials you entered are invalid",
        });
      }
    }
  };

  const testlogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: "testuser@gmail.com",
        password: "testuser123",
      });
      if (response.status === 200) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        authDispatch({ type: "LOGIN", payload: response.data.foundUser });
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The email you entered is not Registered",
        });
      } else if (error.response.status === 401) {
        authDispatch({
          type: "LOGIN_ERROR",
          payload: "The credentials you entered are invalid",
        });
      }
    }
  };

  const logout = () => {
    authDispatch({ type: "LOGOUT", payload: "" });
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ signup, login, testlogin, logout, authData, authErrorMsg }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
