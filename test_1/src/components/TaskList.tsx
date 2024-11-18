import { Task } from "../types"
import TaskComponent from "./Task";

type TaskListProps = { taskList: Task[] };

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
    return (
        <ul>
            {
                taskList.map(task => {
                    return <TaskComponent key={task.id} task={task}/>
                })
            }
        </ul>
    )
}

export default TaskList;