import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signupService,
  loginService,
  testloginService,
} from "../Services/AuthService";

const initialState = {
  authData: {},
  authErrorMsg: "",
};

const signup = createAsyncThunk(
  "auth/signup",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await signupService(userDetails);
      if (response.status === 201) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        return response;
      }
    } catch (error) {
      if (error.response.status === 422) {
        return rejectWithValue("The email already exists");
      }
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await loginService(userDetails);
      if (response.status === 200) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        return response;
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        return rejectWithValue("The email you entered is not Registered");
      } else if (error.response.status === 401) {
        return rejectWithValue("The credentials you entered are invalid");
      }
    }
  }
);

const testlogin = createAsyncThunk(
  "auth/testlogin",
  async (_, { rejectWithValue }) => {
    try {
      const response = await testloginService();
      if (response.status === 200) {
        localStorage.setItem("videoToken", response.data.encodedToken);
        return response;
      }
    } catch (error) {
      console.error(error.response);
      if (error.response.status === 404) {
        return rejectWithValue("The email you entered is not Registered");
      } else if (error.response.status === 401) {
        return rejectWithValue("The credentials you entered are invalid");
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("videoToken");
      state.authData = {};
    },
    clearAuthErrorMsg: (state) => {
      state.authErrorMsg = "";
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.authData = action.payload?.data?.createdUser;
    },
    [signup.rejected]: (state, action) => {
      state.authErrorMsg = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.authData = action.payload?.data?.foundUser;
    },
    [login.rejected]: (state, action) => {
      state.authErrorMsg = action.payload;
    },
    [testlogin.fulfilled]: (state, action) => {
      state.authData = action.payload?.data?.foundUser;
    },
    [testlogin.rejected]: (state, action) => {
      state.authErrorMsg = action.payload;
    },
  },
});

export const { logout, clearAuthErrorMsg } = authSlice.actions;
export default authSlice.reducer;
export { login, signup, testlogin };
