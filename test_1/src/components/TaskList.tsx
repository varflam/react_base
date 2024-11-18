import { Task } from "../types"
import TaskComponent from "./Task";

type TaskListProps = { taskList: Task[] };

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
    return (
        <ul>
            {
                taskList.map(task => {
                    return <TaskComponent task={task}/>
                })
            }
        </ul>
    )
}

export default TaskList;