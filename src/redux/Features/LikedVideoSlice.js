import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLikedVideosService, addItemToLikedVideosService, removeItemFromLikedVideosService } from "../Services/LikedVideoService";

const initialState = {
    LikedVideos: [],
    isLikedVideosLoading: false,
    isLikedVideosError: false,
    LikedVideosErrorData: null,
}

const getLikedVideos = createAsyncThunk(
    "likedVideos/getLikedVideos",
    async (_,{ rejectWithValue }) => {
        try{
            const response = await getLikedVideosService();
            if(response.status === 200){
                return response;
            }
        }catch(error){
            console.log(error.response.data.errors[0])
            return rejectWithValue(error.response.data.errors[0])
        }
    }
)

const addItemToLikedVideos = createAsyncThunk(
    "likedVideos/addItemToLikedVideos",
    async (video, { rejectWithValue }) => {
        try{
            const response = await addItemToLikedVideosService(video);
            if(response.status === 201){
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data.errors[0]);
        }
    }
)

const removeItemFromLikedVideos = createAsyncThunk(
    "likedVideos/removeItemFromLikedVideos",
    async (_id,{ rejectWithValue }) => {
        try{
            const response = await removeItemFromLikedVideosService(_id)
            if (response.status === 200) {
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data.errors[0])
        }
    }
)

const likedVideoSlice = createSlice({
    name: "likedVideos",
    initialState,
    reducers: {
        logoutlikedVideos: (state) => {
            state.LikedVideos = [];
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = false;
            state.LikedVideosErrorData = null;
        }
    },
    extraReducers: {
        [getLikedVideos.pending]: (state, action) => {
            state.isLikedVideosLoading = true;
            state.isLikedVideosError = false;
        },
        [getLikedVideos.fulfilled]: (state, action) => {
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = false;
            state.LikedVideos = action.payload?.data?.likes;
        },
        [getLikedVideos.rejected]: (state, action) => {
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = true;
            state.LikedVideosErrorData = action.payload;
        },
        [addItemToLikedVideos.loading]: (state, action) => {
            state.isLikedVideosLoading = true;
            state.isLikedVideosError = false;
        },
        [addItemToLikedVideos.fulfilled]: (state, action) => {
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = false;
            state.LikedVideos = action.payload?.data?.likes;
        },
        [addItemToLikedVideos.rejected]: (state, action) => {
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = true;
            state.LikedVideosErrorData = action.payload;
        },
        [removeItemFromLikedVideos.loading]: (state, action) => {
            state.isLikedVideosLoading = true;
            state.isLikedVideosError = false;
        },
        [removeItemFromLikedVideos.fulfilled]: (state, action) => {
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = false;
            state.LikedVideos = action.payload?.data?.likes;
        },
        [removeItemFromLikedVideos.rejected]: (state, action) => {
            state.isLikedVideosLoading = false;
            state.isLikedVideosError = true;
            state.LikedVideosErrorData = action.payload;
        }
    }
})

export const { logoutlikedVideos } = likedVideoSlice.actions;
export default likedVideoSlice.reducer;
export { getLikedVideos, addItemToLikedVideos, removeItemFromLikedVideos }