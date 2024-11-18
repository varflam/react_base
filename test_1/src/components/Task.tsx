import React from 'react';
import { Task } from '../types';


type TaskProps = {
    task: Task;
};

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
    return (
        <li className='task'>
            <div className="task__info">
                <h2>{task.name}</h2>
                <div>{task.date.toLocaleDateString()}</div>
                {task.assignee ?
                    (
                        <div>{task.assignee}</div>
                    ) : null
                }
                <div>{task.type}</div>
            </div>
            <div className="task__content">
                <div>{task.description}</div>
                <div>{task.status}</div>
                {task.deadline ? (
                    <div>{task.deadline.toLocaleDateString()}</div>
                ) : null}
                {task.place ? (
                    <div>{task.place}</div>
                ) : null}
            </div>

        </li>
    );
}

export default TaskComponent;