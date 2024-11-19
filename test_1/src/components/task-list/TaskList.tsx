import { useAppSelector } from "../../store";
import TaskComponent from "../task/Task";

const TaskList = () => {
    const { tasks } = useAppSelector((state) => state.tasks);
    return (
        <ul>
            {
                tasks.map(task => {
                    return <TaskComponent key={task.id} task={task}/>
                })
            }
        </ul>
    )
}

export default TaskList;