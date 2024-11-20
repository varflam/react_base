import { useAppSelector } from "../../store";
import Form from "../form/Form";
import TaskComponent from "../task/Task";
import './taskList.css';

const TaskList = () => {
    const { tasks } = useAppSelector((state) => state.tasks);

    return (
        <div className='task-list'>
            <Form type='add'/>
            <ul className="task-list__ul">
                {
                    tasks.map(task => {
                        return <TaskComponent key={task.id} task={task}/>
                    })
                }
            </ul>
        </div>
    )
}

export default TaskList;