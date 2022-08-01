import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHistoryVideosService, addVideoToHistoryService, removeVideoFromHistoryService, clearHistoryService } from "../Services/HistoryService";

const initialState = {
    HistoryData: [],
    inHistory: [],
    isHistoryLoading: false,
    isHistoryError: false,
    HistoryErrorData: null,
}

const getHistoryVideos = createAsyncThunk(
    "history/getHistoryVideos",
    async (_,{ rejectWithValue }) => {
        try{
            const response = await getHistoryVideosService();
            if (response.status === 200) {
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data.errors[0])
        }
    }
)

const addVideoToHistory = createAsyncThunk(
    "history/addVideoToHistory",
    async (video,{ rejectWithValue }) => {
        try{
            const response = await addVideoToHistoryService(video);
            if (response.status === 201) {
                console.log(response.data)
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data.errors[0])
        }
    }
)

const removeVideoFromHistory = createAsyncThunk(
    "history/removeVideoFromHistory",
    async (_id,{ rejectWithValue }) => {
        try{
            const response = await removeVideoFromHistoryService(_id);
            if (response.status === 200) {
                console.log(response.data)
                return response;
            }
        }catch(error){
            rejectWithValue(error)
        }
    }
)

const clearHistory = createAsyncThunk(
    "history/clearHistory",
    async (_,{ rejectWithValue }) => {
        try{
            const response = await clearHistoryService();
            if (response.status === 200) {
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data.errors[0]);
        }
    }
)

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        setInHistory: (state, action) => {
            if(action.payload.length === 0){
                state.inHistory.length = 0;
            }
            else{
                state.inHistory = [...state.inHistory, action.payload]
            }
        },
        removeFromHistory: (state, action) => {
            let temp = [...state.inHistory];
            temp = temp.filter((_id) => _id !== action.payload)
            state.inHistory = temp;
        }
    },
    extraReducers:{
        [getHistoryVideos.pending]: (state, action) => {
            state.isHistoryLoading = true;
            state.isHistoryError = false;
        },
        [getHistoryVideos.fulfilled]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = false;
            state.HistoryData = action.payload?.data?.history;
        },
        [getHistoryVideos.rejected]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = true;
            state.HistoryErrorData = action.payload;
        },
        [addVideoToHistory.loading]: (state, action) => {
            state.isHistoryLoading = true;
            state.isHistoryError = false;
        },
        [addVideoToHistory.fulfilled]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = false;
            state.HistoryData = action.payload?.data?.history;
        },
        [addVideoToHistory.rejected]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = true;
            state.HistoryErrorData = action.payload;
        },
        [removeVideoFromHistory.loading]: (state, action) => {
            state.isHistoryLoading = true;
            state.isHistoryError = false;
        },
        [removeVideoFromHistory.fulfilled]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = false;
            state.HistoryData = action.payload?.data?.history;
        },
        [removeVideoFromHistory.rejected]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = true;
            state.HistoryErrorData = action.payload;
        },
        [clearHistory.loading]: (state, action) => {
            state.isHistoryLoading = true;
            state.isHistoryError = false;
        },
        [clearHistory.fulfilled]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = false;
            state.HistoryData = action.payload?.data?.history;
        },
        [clearHistory.rejected]: (state, action) => {
            state.isHistoryLoading = false;
            state.isHistoryError = true;
            state.HistoryErrorData = action.payload;
        },
    }
})

export const { setInHistory, removeFromHistory } = historySlice.actions;
export default historySlice.reducer;
export { getHistoryVideos, addVideoToHistory, removeVideoFromHistory, clearHistory };
