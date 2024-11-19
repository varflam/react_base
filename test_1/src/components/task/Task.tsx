import React, { useMemo } from 'react';

import cross from '../../assets/cross.svg';
import location from '../../assets/location.svg';
import './task.css';
import { Task } from '../../types';


type TaskProps = {
    task: Task;
};

const TaskComponent: React.FC<TaskProps> = ({ task }) => {

    const statusClassName = useMemo(() => {
        return `task__status ${task.status === 'In progress' ? 'task__status--in-progress' : 'task__status--done'}`;
    }, [task.status]);

    const typeClassName = useMemo(() => {
        return `task__type task__type--${task.type}`;
    }, [task.type]);


    return (
        <li className='task'>
            <div className="task__info">
                <div className='task__date'>{task.date.toLocaleDateString()}</div>
                <div className={typeClassName}>{task.type}</div>
            </div>
            <div className="task__main">
                <h2 className='task__name'>{task.name}</h2>
                {task.assignee ?
                    (
                        <div className='task__assignee'>{task.assignee}</div>
                    ) : null
                }
            </div>
            <div className="task__content">
                <div className='task__description'>{task.description}</div>
                {task.place ? (
                    <div className="task__row">
                        <img src={location} alt="Location" className="task__img" />
                        <div>{task.place}</div>
                    </div>
                ) : null}
                {task.deadline ? (
                    <div className='task__row'>
                        <img className='task__img' src={cross} alt="deadline" />
                        <div>{task.deadline.toLocaleDateString()}</div>
                    </div>
                ) : null}
                <div className={statusClassName}>{task.status}</div>
            </div>

        </li>
    );
}

export default TaskComponent;