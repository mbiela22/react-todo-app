import {configureStore} from "@reduxjs/toolkit";
import tasksSliceReducer from "./slice/tasksSlice";
import filterSliceReducer from "./slice/filterSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksSliceReducer,
        filter: filterSliceReducer,
    }
})
