import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'UserTeste',
    teamId: 1
}

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        ChangeTeam: (state, { payload }) => {
            state.teamId =  payload
        }
    }
})

export const { ChangeTeam } = UserSlice.actions;
export default UserSlice.reducer