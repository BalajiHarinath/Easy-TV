import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleVideoService } from "../Services/SingleVideoService";

const initialState = {
  singleVideo: [],
  issinglecardLoading: false,
  issinglecardError: false,
  singlecardErrorData: null,
};

const getSingleVideo = createAsyncThunk(
  "singleVideo/getSingleVideo",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await getSingleVideoService(_id);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,
  extraReducers: {
    [getSingleVideo.pending]: (state, action) => {
      state.issinglecardLoading = true;
      state.issinglecardError = false;
    },
    [getSingleVideo.fulfilled]: (state, action) => {
      state.issinglecardLoading = false;
      state.issinglecardError = false;
      state.singleVideo = action.payload?.data?.video;
    },
    [getSingleVideo.rejected]: (state, action) => {
      state.issinglecardLoading = false;
      state.issinglecardError = true;
      state.singlecardErrorData = action.payload;
    },
  },
});

export default singleVideoSlice.reducer;
export { getSingleVideo };
