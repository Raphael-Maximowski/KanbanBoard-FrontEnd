import { configureStore } from "@reduxjs/toolkit";
import TeamSlice from "./reducers/team";
import UserSlice from "./reducers/user"
import TaskSlice from "./reducers/tasks"

const store = configureStore({
    reducer: {
        Team:TeamSlice,
        User: UserSlice,
        Task: TaskSlice
    },
});

export default store;
