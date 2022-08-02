import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesService } from "../Services/CategoryService";

const initialState = {
  categoryData: [],
  ischipLoading: false,
  ischipError: false,
  chipErrorData: null,
  selectedCategory: "All",
};

const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategoriesService();
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.ischipLoading = true;
      state.ischipError = false;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.ischipLoading = false;
      state.ischipError = false;
      state.categoryData = action.payload?.data?.categories;
    },
    [getCategories.rejected]: (state, action) => {
      state.ischipLoading = false;
      state.ischipError = true;
      state.chipErrorData = action.payload;
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
export { getCategories };
