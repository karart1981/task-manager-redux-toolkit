import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus, type IUpdateAction, type IState } from "./types";
import { getTasks, updateTask } from "./task.api";

const initialState:IState = {
    tasks: [
        
    ]
}

export const taskSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder
        .addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
        })
        .addCase(updateTask.fulfilled, (state, action: PayloadAction<IUpdateAction>) => {
            
            const task = state.tasks.find(task => task.id === action.payload.id)

            if(task) {
                task.status = action.payload.status
            }
        })
    }
})

export const reducer = taskSlice.reducer
