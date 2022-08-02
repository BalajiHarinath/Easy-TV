import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice";
import watchLaterReducer from "../Features/WatchLaterSlice";
import likedVideoReducer from "../Features/LikedVideoSlice";
import historyReducer from "../Features/HistorySlice";
import videoReducer from "../Features/VideoSlice";
import categoryReducer from "../Features/CategorySlice";
import singleVideoReducer from "../Features/SingleVideoSlice";

export const store = configureStore({
    reducer: {
        authReducer,
        watchLaterReducer,
        likedVideoReducer,
        historyReducer,
        videoReducer,
        categoryReducer,
        singleVideoReducer,
    }
})