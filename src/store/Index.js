import { configureStore } from "@reduxjs/toolkit";
import TeamSlice from "./reducers/team";
import UserSlice from "./reducers/user"

const store = configureStore({
    reducer: {
        Team:TeamSlice,
        User: UserSlice
    },
});

export default store;
