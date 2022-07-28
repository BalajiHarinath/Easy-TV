import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { getWatchLaterVideosService, addItemToWatchLaterService, removeItemFromWatchLaterService } from "../Services/WatchLaterService";

const initialState = {
    watchLaterVideos: [],
    isWatchLaterVideoLoading: false,
    isWatchlaterVideoError: false,
    watchlaterVideoErrorData: null,
}

const getWatchLaterVideos = createAsyncThunk(
    "watchLater/getWatchLaterVideos",
    async (_,{ rejectWithValue }) => {
        try{
            const response = await getWatchLaterVideosService();
            if(response.status === 200){
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
)

const addItemToWatchLater = createAsyncThunk(
    "watchLater/addItemToWatchLater",
    async (video,{ rejectWithValue }) => {
        try{
            const response = await addItemToWatchLaterService(video);
            if(response.status === 201){
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data)
        }  
    }
)

const removeItemFromWatchLater = createAsyncThunk(
    "watchLater/removeItemFromWatchLater",
    async (_id,{ rejectWithValue }) => {
        try{
            const response = await removeItemFromWatchLaterService(_id)
            if(response.status === 200){
                return response;
            }
        }catch(error){
            // return rejectWithValue(error.response.data.errors[0])
            return rejectWithValue(error.response.data)
        }
    }
)

const watchLaterSlice = createSlice({
    name: "watchLater",
    initialState,
    reducers: {
        logoutWatchLaterVideos: (state) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = false;
            state.watchlaterVideoErrorData = [];
        }
    },
    extraReducers: {
        [getWatchLaterVideos.loading]: (state, action) => {
            state.isWatchLaterVideoLoading = true;
            state.isWatchlaterVideoError = false;
        },
        [getWatchLaterVideos.fulfilled]: (state, action) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = false;
            state.watchLaterVideos = action.payload?.data?.watchlater;
        },
        [getWatchLaterVideos.error]: (state, action) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = true;
            state.watchlaterVideoErrorData = action.payload;
        },
        [addItemToWatchLater.loading]: (state, action) => {
            state.isWatchLaterVideoLoading = true;
            state.isWatchlaterVideoError = false;
        },
        [addItemToWatchLater.fulfilled]: (state, action) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = false;
            state.watchLaterVideos = action.payload?.data?.watchlater;
        },
        [addItemToWatchLater.error]: (state, action) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = true;
            state.watchlaterVideoErrorData = action.payload;
        },
        [removeItemFromWatchLater.loading]: (state, action) => {
            state.isWatchLaterVideoLoading = true;
            state.isWatchlaterVideoError = false;
        },
        [removeItemFromWatchLater.fulfilled]: (state, action) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = false;
            state.watchLaterVideos = action.payload?.data?.watchlater;
        },
        [removeItemFromWatchLater.error]: (state, action) => {
            state.isWatchLaterVideoLoading = false;
            state.isWatchlaterVideoError = true;
            state.watchlaterVideoErrorData = action.payload;
        }
    }

})

export const { logoutWatchLaterVideos } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
export { getWatchLaterVideos, addItemToWatchLater, removeItemFromWatchLater }