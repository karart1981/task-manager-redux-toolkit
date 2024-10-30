import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { IStatus } from "./types"
import { getTasks, updateTask } from "./task.api"
import { Task } from "../../components/task"

export const TaskList = () => {

    const tasks = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTasks())
    }, [])

    
    
    return (
        <>
            <h3>Task list</h3>
            <div id="tasks">
                {
                    tasks.map(task => <Task task={task} key={task.id}/>)
                }
            </div>
        </>
    )
}