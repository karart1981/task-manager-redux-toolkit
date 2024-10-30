import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITask, IUpdateAction } from "./types";

export const getTasks = createAsyncThunk('get/tasks', async (): Promise<ITask[]> => {
    const response = await axios.get(`http://localhost:3004/tasks`)
    
    return response.data
})


export const updateTask = createAsyncThunk('update/task', async (data: IUpdateAction): Promise<IUpdateAction> => {
    const response = await axios.patch(`http://localhost:3004/tasks/${data.id}`, {status: data.status})

    return response.data
})