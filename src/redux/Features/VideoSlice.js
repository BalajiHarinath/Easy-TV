import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllVideosService } from "../Services/VideoService";

const initialState = {
    allVideos: [],
    iscardLoading: false,
    iscardError: false,
    cardErrorData: null,
}

const getAllVideos = createAsyncThunk(
    "video/getAllVideos",
    async (_,{ rejectWithValue }) => {
        try{
            const response = await getAllVideosService();
            if(response.status === 200){
                return response;
            }
        }catch(error){
            return rejectWithValue(error.response.data.errors[0]);
        }
    }
)
    
const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: {
        [getAllVideos.pending]: (state, action) => {
            state.iscardLoading = true;
            state.iscardError = false;
        },
        [getAllVideos.fulfilled]: (state, action) => {
            state.iscardLoading = false;
            state.iscardError = false;
            state.allVideos = action.payload?.data?.videos;
        },
        [getAllVideos.rejected]: (state, action) => {
            state.iscardLoading = false;
            state.iscardError = true;
            state.cardErrorData = action.payload;
        },
    }
})

export default videoSlice.reducer;
export { getAllVideos };
