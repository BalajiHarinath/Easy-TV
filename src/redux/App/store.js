import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice";
import watchLaterReducer from "../Features/WatchLaterSlice";
import likedVideoReducer from "../Features/LikedVideoSlice";

export const store = configureStore({
    reducer: {
        authReducer,
        watchLaterReducer,
        likedVideoReducer,
    }
})