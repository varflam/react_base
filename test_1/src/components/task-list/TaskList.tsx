import { useAppDispatch, useAppSelector } from "../../store";
import TaskComponent from "../task/Task";
import plus from '../../assets/plus.svg'
import './taskList.css';
import { useState } from "react";
import { Task } from "../../types";
import { addTask } from "../../store/slices/taskListSlice";

type NewTask = Partial<Task> & {
    date?: string;
    deadline?: string;
}

const TaskList = () => {
    const { tasks } = useAppSelector((state) => state.tasks);
    const [newTask, setNewTask] = useState<NewTask>({
        type: 'work',
    });
    const dispatch = useAppDispatch();

    const onInputChange = (key: keyof Task, value: string) => {
        setNewTask({
            ...newTask,
            [key]: value,
        })
    }

    const addNewTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(newTask);
        if (!newTask.name || !newTask.type || !newTask.description) return;
        dispatch(addTask({
            name: newTask.name,
            date: Date.now(),
            id: tasks.length + 1,
            assignee: newTask.assignee ?? undefined,
            deadline: newTask.deadline ?? undefined,
            description: newTask.description,
            type: newTask.type,
            status: 'In progress',
        }));
    }

    return (
        <div className='task-list'>
            <form action="#" className="task-list__new">
                <div className="task-list__info">
                    <label htmlFor="type">Task type</label>
                    <select
                        name="type"
                        value={newTask.type}
                        className="task-list__input"
                        onChange={(e) => onInputChange('type', e.target.value)}
                    >
                        <option value="work">Work</option>
                        <option value="family">Family</option>
                        <option value="study">Study</option>
                        <option value="home">Home</option>
                    </select>
                </div>
                <div className="task-list__main">
                    <input
                        type="text"
                        placeholder="Name"
                        className="task-list__input"
                        onChange={(e) => onInputChange('name', e.target.value)}
                        required
                    />
                    {newTask.type === 'home' ?
                        (
                            <input
                                type="text"
                                placeholder="Assignee"
                                className="task-list__input"
                                onChange={(e) => onInputChange('assignee', e.target.value)}
                            />
                        ) : null
                    }
                </div>
                <textarea
                        name="task_descr"
                        id="task_descr"
                        placeholder="Task description"
                        className="task-list__input task-list__input--textarea"
                        onChange={(e) => onInputChange('description', e.target.value)}
                        cols={43}
                        required
                    >
                </textarea>
                <div className="task-list__content">
                    {newTask.type === 'study' ? (
                        <input
                            type="text"
                            placeholder="Location"
                            className="task-list__input"
                            onChange={(e) => onInputChange('place', e.target.value)}
                        />
                    ) : null}
                    {newTask.type === 'study' || newTask.type === 'work' ? (
                        <input
                            type="text"
                            placeholder="Deadline"
                            className="task-list__input"
                            onChange={(e) => onInputChange('deadline', e.target.value)}
                        />
                    ) : null}
                </div>
                <button
                    className="task-list__btn"
                    type="submit"
                    onClick={(e) => addNewTask(e)}
                >
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