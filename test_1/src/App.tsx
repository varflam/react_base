import React from 'react';
import TaskList from './components/task-list/TaskList';
import './style/reset.css';
import './style/app.css';

function App() {
    return (
        <div className='task-manager'>
            <div className="container">
                <h1 className='header figtree-bold'>Task Manager</h1>
                <TaskList/>
            </div>
        </div>
    );
}

export default App;
