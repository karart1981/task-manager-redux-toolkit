import { useAppDispatch, useAppSelector } from "../app/hooks"
import { updateTask } from "../features/tasks/task.api"
import { IStatus, ITask } from "../features/tasks/types"

interface IProps {
    task: ITask
}

export const Task = ({task}: IProps) => {

    const dispatch = useAppDispatch()



    return (
         <div>
                <p>{task?.content}</p>
                <img
                        src={
                        task?.status == IStatus.unstarted
                            ? "https://cdn4.iconfinder.com/data/icons/date-and-time-3/32/109-01-512.png"
                            : task?.status == IStatus.onProcess
                            ? "https://cdn3.iconfinder.com/data/icons/erp-systems/48/ERP-18-512.png"
                            : "https://cdn2.iconfinder.com/data/icons/internet-download-manager-1/64/11_Completed_check_tick_verified_approved-512.png"
                        }
                />

                <br />

                <select
                    value={task?.status}
                    onChange={evt => {
                    dispatch(updateTask({ id: task.id, status: evt.target.value }))
                    }}
                >
                    
                    <option value={IStatus.unstarted}>unstarted</option>
                    <option value={IStatus.onProcess}>on process</option>
                    <option value={IStatus.completed}>completed</option>
                </select>
            </div>
        )
}
