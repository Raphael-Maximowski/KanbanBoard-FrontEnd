import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const TaskSlice = createSlice({
    name: 'TasksSlice',
    initialState,
    reducers: {
        AddTask: (state, {payload}) => {
            state.push(payload)
            console.log("Task Recebida", payload)
        }
    }
})

export const {AddTask} =  TaskSlice.actions

export default TaskSlice.reducer