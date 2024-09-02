import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    [
        {
            team: {
                id: 1,
                name: 'Exemplo 1',
                desc: "Time Criado Automaticamente"
            }
        }
    ],
    [false]
];


const TeamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        AddList: (state, { payload }) => {
            state[0].push(payload)
            console.log("Chegou no Payload")
        },
        ChangeModalState: (state, { payload }) => {
            state[1] = payload
        }
    }
});

export const { AddList, ChangeModalState } = TeamSlice.actions;

export default TeamSlice.reducer; // Certifique-se de exportar o reducer
