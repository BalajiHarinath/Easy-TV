import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice";
import watchLaterReducer from "../Features/WatchLaterSlice";
export const store = configureStore({
    reducer: {
        authReducer,
        watchLaterReducer,
    }
})