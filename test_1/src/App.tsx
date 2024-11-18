import React from 'react';
import { Task } from './types';
import TaskList from './components/TaskList';
import './style/reset.css';
import './style/app.css';

function App() {
    const tasks: Task[] = [
        {
            name: 'Clean bathroom',
            status: 'In progress',
            type: 'work',
            assignee: 'David',
            date: new Date(2024, 3, 3),
            description: 'Clean bath, sink and toilet',
            id: 1,
        }
    ]
    return (
        <div className='task-manager'>
            <div className="container">
                <h1 className='header figtree-bold'>Task Manager</h1>
                <TaskList taskList={tasks}/>
            </div>
        </div>
    );
}

export default App;
