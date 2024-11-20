import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Task } from "../../types";
import { addTask, editTask, setEdit } from "../../store/slices/taskListSlice";
import plus from '../../assets/plus.svg';
import edit from '../../assets/pen.svg';
import './form.css';

type NewTask = Partial<Task> & {
    date?: number;
    deadline?: number;
}

type FormProps = {
    type: 'add' | 'edit';
    task?: Task;
}

const Form: React.FC<FormProps> = ({ type, task }) => {
    const { tasks } = useAppSelector((state) => state.tasks);

    const [newTask, setNewTask] = useState<NewTask>( task ?? {
        type: 'work',
    });
    const dispatch = useAppDispatch();

    const onInputChange = (key: keyof Task, value: string) => {
        setNewTask({
            ...newTask,
            [key]: value,
        });
    }

    const addNewTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
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

    const onEditTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!task) return;
        dispatch(editTask({
            id: task?.id,
            task: newTask,
        }));

        dispatch(setEdit(false));
    }

    return (
        <form action="#" className="form">
            <div className="form__info">
                <label htmlFor="type">Task type</label>
                <select
                    name="type"
                    value={newTask.type}
                    className="form__input"
                    onChange={(e) => onInputChange('type', e.target.value)}
                >
                    <option value="work">Work</option>
                    <option value="family">Family</option>
                    <option value="study">Study</option>
                    <option value="home">Home</option>
                </select>
            </div>
            <div className="form__main">
                <input
                    type="text"
                    placeholder="Name"
                    className="form__input"
                    onChange={(e) => onInputChange('name', e.target.value)}
                    value={newTask.name || ''}
                    required
                />
                {newTask.type === 'home' ?
                    (
                        <input
                            type="text"
                            placeholder="Assignee"
                            className="form__input"
                            onChange={(e) => onInputChange('assignee', e.target.value)}
                            value={newTask.assignee || ''}
                        />
                    ) : null
                }
            </div>
            <textarea
                    name="task_descr"
                    id="task_descr"
                    placeholder="Task description"
                    className="form__input form__input--textarea"
                    onChange={(e) => onInputChange('description', e.target.value)}
                    value={newTask.description || ''}
                    cols={43}
                    required
                >
            </textarea>
            <div className="form__content">
                {newTask.type === 'study' ? (
                    <input
                        type="text"
                        placeholder="Location"
                        className="form__input"
                        onChange={(e) => onInputChange('place', e.target.value)}
                        value={newTask.place || ''}
                    />
                ) : null}
                {newTask.type === 'study' || newTask.type === 'work' ? (
                    <input
                        type="text"
                        placeholder="Deadline"
                        className="form__input"
                        onChange={(e) => onInputChange('deadline', e.target.value)}
                        value={newTask.deadline || ''}
                    />
                ) : null}
            </div>
            {
                type === 'add' ? (
                    <button
                        className="form__btn"
                        type="submit"
                        onClick={(e) => addNewTask(e)}
                    >
                        <img src={plus} alt="plus" className="form__icon" />
                        <span>Add new task</span>
                    </button>
                ) : (
                    <button
                        className="form__btn"
                        type="submit"
                        onClick={(e) => onEditTask(e)}
                    >
                        <img src={edit} alt="edit" className="form__icon" />
                        <span>Edit task</span>
                    </button>
                )
            }
        </form>
    )
}

export default Form;