import { useAppSelector } from "../../store";
import TaskComponent from "../task/Task";
import plus from '../../assets/plus.svg'
import './taskList.css';
import { useState } from "react";
import { Task } from "../../types";

type NewTask = Partial<Task> & {
    date?: string;
    deadline?: string;
}

const TaskList = () => {
    const { tasks } = useAppSelector((state) => state.tasks);
    const [newTask, setNewTask] = useState<NewTask>({});

    const onInputChange = (key: keyof Task, value: string) => {
        setNewTask({
            ...newTask,
            [key]: value,
        })
    }

    return (
        <div className='task-list'>
            <form action="#" className="task-list__new">
                <div className="task__info">
                    <label htmlFor="type">Task type</label>
                    <select
                        name="type"
                        value={newTask.type}
                        onChange={(e) => onInputChange('type', e.target.value)}
                        required
                    >
                        <option value="work">Work</option>
                        <option value="family">Family</option>
                        <option value="study">Study</option>
                        <option value="home">Home</option>
                    </select>
                </div>
                <div className="task__main">
                    <input
                        type="text"
                        placeholder="Name"
                        className="task-list__input"
                        required
                    />
                    {newTask.type === 'home' ?
                        (
                            <input
                                type="text"
                                placeholder="Assignee"
                                className="task-list__input"
                            />
                        ) : null
                    }
                </div>
                <div className="task__content">
                    <textarea
                        name="task_descr"
                        id="task_descr"
                        placeholder="Task description"
                        className="task-list__input"
                        required
                    >
                    </textarea>
                    {newTask.type === 'study' ? (
                        <input
                            type="text"
                            placeholder="Location"
                            className="task-list__input"
                        />
                    ) : null}
                    {newTask.type === 'study' || newTask.type === 'work' ? (
                        <input
                            type="text"
                            placeholder="Deadline"
                            className="task-list__input"
                        />
                    ) : null}
                </div>
                <button className="task-list__btn" type="submit">
                    <img src={plus} alt="plus" className="task-list__icon" />
                    <span>Add new task</span>
                </button>
            </form>
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